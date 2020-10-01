import React, { Component } from 'react'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom';

import * as Api from '../Api/HomeServices'
import * as BillApi from '../Api/BillServices'
import * as ApiTable from '../Api/TableServices'
import * as ApiToken from '../Api/TokenServices'
import RunningTable from '../components/RunningTable'
import CategoryTemplate from '../Templates/CategoryTemplate'
import ItemTemplate from '../Templates/ItemTemplate'
import CartTemplate from '../Templates/CartTemplate'

import TableBook from '../Pages/TableBook'

import SignalRService from '../Helpers/signalRService';
import OrderTypeSelectionUI from '../Templates/OrderTypeSelectionUI'
import { personicon } from '../components/Image';

const PAGES = {
    ORDERS: 'orders',
    TABLEBOOK: 'tablebook'
}

const ORDERTYPES = {
    DINEIN: 'dinein',
    TAKEAWAY: 'takeaway',
    DELIVERY: 'Delivery'
}

class Orders extends Component {
    constructor(props) {
        super(props);
        document.title = this.props.title
        window.scrollTo(0, 0);

        if (this.props.location.state) {
            const { activePage } = this.props.location.state
            console.log('this.props.activePage :', activePage)
        }

        this.senderID = uuid();
        this.state = {
            activePage: this.props.activePage,
            activeOrderType: ORDERTYPES.DINEIN,
            itemCategories: [],
            items: [],
            tables: [],
            customers: [],
            runningTables: [],
            currentCart: undefined,
            tokenList: []
        }

        this.getItems = this.getItems.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.newOrderHandler = this.newOrderHandler.bind(this);
        this.setCurrentCartHandler = this.setCurrentCartHandler.bind(this);
        this.sendToken = this.sendToken.bind(this);

        SignalRService.registerReceiveEvent((msg) => {
            this.receiveMessage(msg);
        });
    }


    receiveMessage = (msg) => {
        let tokenList = this.state.tokenList
        const recivedToken = JSON.parse(msg)
        const foundToken = tokenList.find(x => x._id === recivedToken._id)

        if (foundToken) {
            foundToken = recivedToken
        } else {
            this.setState(previousState => ({
                tokenList: [...previousState.tokenList, recivedToken]
            }));
        }

        this.setState({ tokenList });
    }

    getCategories = () => {
        Api.getCategory().then((response) => {
            this.setState({ itemCategories: response.data })
        })
    }

    getItems = (categoryid) => {
        Api.getItems(categoryid)
            .then((response) => {
                this.setState({ items: response.data })
            })
    }

    getTables = async () => {
        let response = await ApiTable.getTableList()
        this.setState({ tables: response.data })
    }

    getRunningTables = async () => {
        let response = await BillApi.getRunningTables()
        this.setState({ runningTables: response.data })
        this.setCurrentCartHandler();
    }

    getCurrentCartModel = (table) => {
        let currentCart = {
            tableid: table,
            postype: this.state.activeOrderType,
            property: { posstatus: "running" }, //checkout
            customerid: {_id: "5ef2f0558d5725464bef4d5d", property:{fullname:"AAAA"}},
            onModel: "Member",
            amount: 0,
            totalamount: 0,
            discount: 0,
            taxamount: 0,
            totalquantity: 0,
            items: [],
            token: this.getTokenModel(table)
        }

        return currentCart;
    }

    getTokenModel = (table) => {
        let token = {
            prefix: undefined,
            tokennumber: undefined,
            status: "waiting",
            contextid: "",
            onModel:"Billing",
            property: {
                table: { _id: table._id, tablename: table.property.tablename },
                items: []
            }
        }

        return token
    }

    newOrderHandler = () => {
        this.setState({ activePage: PAGES.TABLEBOOK });
    }

    setCurrentCartHandler = async (table) => {
        if (table) {
            const tableid = table._id
            let currentCart = this.state.runningTables.find(x => x.tableid._id === tableid)

            if ((currentCart) && (currentCart._id) && (currentCart._id !== "")) {
                let response = await BillApi.getByID(currentCart._id)
                currentCart = response.data
                currentCart.token = this.getTokenModel(table);

                this.setState({ currentCart: currentCart })
            }

            if ((currentCart) && (!currentCart._id)) {
                this.setState({ currentCart: currentCart })
            }

            if (!currentCart) {
                let runningTables = this.state.runningTables;
                let currentCart = this.getCurrentCartModel(table);
                runningTables.push(currentCart);

                this.setState({
                    runningTables: runningTables,
                    currentCart: currentCart
                });
            }

            this.setActivePage(PAGES.ORDERS)
        } else {
            if ((this.state.runningTables) && (this.state.runningTables.length > 0)) {
                let currentCart = this.state.runningTables[this.state.runningTables.length - 1]
                currentCart.token = this.getTokenModel(currentCart.tableid);

                this.setState({
                    currentCart: currentCart,
                    activePage: PAGES.ORDERS
                });
            } else {
                this.setState({
                    currentCart: undefined,
                    activePage: PAGES.ORDERS
                });
            }
        }
    }

    setActivePage = (activePageName) => {
        this.setState({ activePage: activePageName });
    }

    sendToken = async () => {
        let currentCart = this.state.currentCart
        let currentToken = this.state.currentCart.token

        if ((currentToken.property.items) && (currentToken.property.items.length > 0)) {

            if ((currentCart.customerid) && (currentCart.customerid._id)) {
                currentCart.customerid = currentCart.customerid._id
            }

            const response = await BillApi.save(currentCart)
            if (response.status === 200) {
                currentCart = response.data

                currentToken.contextid = currentCart._id
                console.log('responseToken :', currentToken)
                const responseToken = await ApiToken.save(currentToken)
                if (responseToken.status === 200) {
                    const token = responseToken.data;
                    token.senderID = this.senderID;
                    SignalRService.sendMessage(JSON.stringify(token));
                } else {
                    console.log('sendToken Save Token ERROR', response.errors)
                    alert("sendToken Save Token ERROR : " + response.errors.toString())
                }

                const responseGetByID = await BillApi.getByID(currentCart._id)
                currentCart = responseGetByID.data
                currentCart.token = this.getTokenModel(currentCart.tableid)
                console.log('sendToken Current Car', currentCart)
                this.setState({ currentCart: currentCart })
            } else {
                console.log('sendToken Save Bill ERROR', response.errors)
                alert("sendToken Save Bill ERROR : " + response.errors.toString())
            }

        } else {
            alert("Empty Current KOT")
        }
    }

    saveCart = () => {
        BillApi.save(this.state.currentCart)
            .then((response) => {
                //this.setState({ items: response.data })
            })
    }

    addToCart = (item) => {
        //if Current Cart not exist then Redirect to TableBook
        let currentCart = this.state.currentCart;
        if (!currentCart.token) {
            currentCart.token = this.getTokenModel(currentCart.tableid)
        }

        let itemid = item._id;
        let cartItem = currentCart.items.find(x => ((x.item._id) && (x.item._id === itemid)) || ((x.item) && (x.item === itemid)));

        if (cartItem) {
            cartItem.quantity = Number(cartItem.quantity) + Number(1);
            cartItem.totalcost = Number(cartItem.cost) * Number(cartItem.quantity);
        } else {
            let cartItem = {
                _id: itemid,
                item: itemid,
                quantity: Number(1),
                cost: item.itemid.sale.rate,
                totalcost: item.itemid.sale.rate,
                discount: 0,
                itemname: item.itemid.itemname
            }
            currentCart.items.push(cartItem);
        }

        currentCart.totalquantity = currentCart.items.map(item => item.quantity).reduce((prev, next) => prev + next);
        currentCart.amount = currentCart.items.map(item => item.amount).reduce((prev, next) => prev + next);
        currentCart.totalamount = currentCart.items.map(item => item.totalcost).reduce((prev, next) => prev + next);

        let tokenItem = currentCart.token.property.items.find(x => x._id === itemid);
        if (tokenItem) {
            tokenItem.quantity = Number(tokenItem.quantity) + Number(1);
            tokenItem.totalcost = Number(tokenItem.cost) * Number(tokenItem.quantity);
        } else {
            let tokenItem = {
                _id: itemid,
                quantity: Number(1),
                itemname: item.itemid.itemname,
                cost: item.itemid.sale.rate,
                totalcost: item.itemid.sale.rate
            }
            currentCart.token.property.items.push(tokenItem);
        }

        this.setState({
            currentCart: currentCart
        });
    }

    async componentDidMount() {
        await this.getTables();
        await this.getRunningTables();
        this.getCategories();
        this.getItems();
    }

    render() {
        const { activePage, activeOrderType, tables, itemCategories, items, currentCart, runningTables, tokenList } = this.state

        let runningBillTableList

        if ((currentCart) && (currentCart.tableid._id != "")) {
            runningBillTableList = runningTables.map(bill =>
                <li onClick={() => this.setCurrentCartHandler(bill.tableid)} className="nav-item" key={bill.tableid._id} id={bill.tableid._id}>
                    <a className={`nav-link ${currentCart.tableid._id === bill.tableid._id ? "active" : ""}`} href="#">
                        <div className="pos-table-bar-cap">Table</div>
                        <div className="pos-table-bar-num">{bill.tableid.property.tablename}</div>
                    </a>
                </li>
            );
        }

        if (activePage === PAGES.TABLEBOOK) {

            const renderTableList = tables.map(table =>
                <li onClick={() => this.setCurrentCartHandler(table)} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" key={table._id}>
                    <div className="card white-box mb-10 border-0 table-box-height occupied-bg"  >
                        <div className="card-body p-2 ">
                            <div className="d-flex justify-content-end"><img src={personicon} alt="" /> <span className="table-person-title ml-2">{table.property.capacity}</span> </div>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="table-restaurant-title">{table.property.tablename}</div>
                                {/* <div className="table-number">01</div> */}
                            </div>
                        </div>
                    </div>
                </li>
            );

            return <TableBook tables={tables} tableList={renderTableList} />
        }

        return (
            <React.Fragment >
                <div id="layoutSidenav_content">
                    {/* <main> */}
                    <div className="container-fluid">
                        <div className="row table-item-gutters">
                            <OrderTypeSelectionUI activeOrderType={activeOrderType}></OrderTypeSelectionUI>
                            <RunningTable runningBillTableList={runningBillTableList} newOrderHandler={() => this.newOrderHandler} />
                        </div>
                        {(currentCart) &&
                            <div className="row table-item-gutters">
                                <CartTemplate currentCart={currentCart} tokenList={tokenList} sendTokenHandler={() => this.sendToken} />

                                <div className="col-xl-8 col-lg-8 col-md-7">
                                    <ul className="nav nav-pills mb-2 categories-pills" id="pills-tab" role="tablist">
                                        <CategoryTemplate
                                            key="A11"
                                            id="A11"
                                            titile="All"
                                            selected={true}
                                            clickHandler={() => this.getItems()}
                                        />

                                        {itemCategories.map(category =>
                                            <CategoryTemplate
                                                key={category._id}
                                                id={category._id}
                                                titile={category.property.title}
                                                clickHandler={() => this.getItems(category._id)}
                                            />
                                        )}
                                    </ul>

                                    <div className="tab-content categories-tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-item-1" role="tabpanel" aria-labelledby="pills-item-1-tab">
                                            <div className="row card-item-gutters">

                                                {items.map(item =>
                                                    <ItemTemplate key={item._id}
                                                        item={item}
                                                        clickHandler={() => this.addToCart(item)}
                                                    />
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    {/* </main> */}
                </div>
            </React.Fragment>
        )
    }
}

export default Orders

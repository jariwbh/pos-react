import React from 'react'
import { ORDERTYPES } from '../Pages/OrderEnums'

function OrderTypeSelectionUI(props) {
    return (
        <React.Fragment>
            <div className="col-xl-4 col-lg-4 col-md-5">
                <div className="white-box mt-10 mb-0 mb-md-10">
                    <ul className="nav nav-pills d-flex justify-content-around flex-lg-nowrap">
                        <li className="nav-item" onClick={() => props.changeOrderType(ORDERTYPES.DINEIN)}>
                            <a className={`nav-link ${props.activeOrderType === ORDERTYPES.DINEIN ? "active" : ""}`} href="/#">
                                <div className="text-center mb-1">
                                    <svg className="option-tab-svg" xmlns="http://www.w3.org/2000/svg" width="27.152" height="27" viewBox="0 0 27.152 27"><g transform="translate(0 -0.499)"><path d="M73.379,17l1.6-.1h.009a3.758,3.758,0,0,0,2.8-1.635l1.262-1.85a7.465,7.465,0,0,0,1.2-5.478,1.685,1.685,0,0,0-1.581-1.4,7.469,7.469,0,0,0-5.3,1.845L71.679,9.851a3.756,3.756,0,0,0-1.288,2.976s0,.006,0,.008l.091,1.6a2.246,2.246,0,0,1-.625,1.683L56.683,29.645a1.913,1.913,0,0,0-.513,1.421A2.2,2.2,0,0,0,58.4,33.2q.088,0,.175-.007a1.915,1.915,0,0,0,1.351-.681L71.782,17.821a2.248,2.248,0,0,1,1.6-.823Zm-2.23.311L59.3,32a1.108,1.108,0,0,1-.784.383,1.39,1.39,0,0,1-1.527-1.353,1.106,1.106,0,0,1,.285-.822l13.174-13.53a3.063,3.063,0,0,0,.853-2.3l-.091-1.592a2.946,2.946,0,0,1,1.01-2.33L73.9,8.99a6.663,6.663,0,0,1,4.722-1.645.871.871,0,0,1,.817.724,6.655,6.655,0,0,1-1.068,4.884L77.112,14.8a2.948,2.948,0,0,1-2.192,1.282l-1.592.1a3.066,3.066,0,0,0-2.179,1.123Zm0,0" transform="translate(-53.198 -5.705)" /><path d="M300.7,295.026l-8.806-8.021a.406.406,0,1,0-.547.6l8.8,8.019a1.1,1.1,0,0,1,.335.8,1.387,1.387,0,0,1-1.438,1.438,1.1,1.1,0,0,1-.8-.332l-7.847-8.615a.406.406,0,1,0-.6.547l7.849,8.617a1.908,1.908,0,0,0,1.383.6h.043a2.2,2.2,0,0,0,2.223-2.266,1.91,1.91,0,0,0-.6-1.385Zm0,0" transform="translate(-274.293 -271.179)" /><path d="M4.9,11.186a3.758,3.758,0,0,0,2.458.994h.008l1.594,0a2.239,2.239,0,0,1,1.638.722l.7.771a.406.406,0,1,0,.6-.547l-.7-.772a3.054,3.054,0,0,0-2.234-.987l-1.59,0a2.949,2.949,0,0,1-1.9-.762L.847,5.115a.14.14,0,0,1,.206-.189l4.2,4.2a1.067,1.067,0,0,0,1.508,0l.494-.494h0l.877-.877h0l.494-.494a1.067,1.067,0,0,0,0-1.508l-4.2-4.2a.14.14,0,0,1,.189-.206l5.491,4.619a2.948,2.948,0,0,1,.762,1.9l0,1.59a3.057,3.057,0,0,0,.988,2.235l.752.685a.406.406,0,1,0,.547-.6l-.751-.684a2.24,2.24,0,0,1-.724-1.639l0-1.594s0-.006,0-.009A3.758,3.758,0,0,0,10.687,5.4a.406.406,0,0,0-.037-.036L5.138.724a.952.952,0,0,0-1.286,1.4l4.2,4.2a.255.255,0,0,1,0,.36L7.85,6.9,3.164,2.211a.406.406,0,1,0-.574.574L7.276,7.471l-.3.3L2.286,3.089a.406.406,0,1,0-.574.574L6.4,8.349l-.207.207a.255.255,0,0,1-.36,0l-4.2-4.2a.952.952,0,0,0-1.4,1.286l4.637,5.511a.378.378,0,0,0,.036.037Zm0,0" /></g></svg>
                                </div>
                                <div className="pos-table-bar-cap">Dine In</div>
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => props.changeOrderType(ORDERTYPES.TAKEAWAY)}>
                            <a className={`nav-link ${props.activeOrderType === ORDERTYPES.TAKEAWAY ? "active" : ""}`} href="/#">
                                <div className="text-center mb-1">
                                    <svg className="option-tab-svg" xmlns="http://www.w3.org/2000/svg" width="29.839" height="27.404" viewBox="0 0 29.839 27.404"><path d="M28.566,14.005H27.531a17.121,17.121,0,0,0-1.537-5.243c-.1-.219-.026.286-.245.388s-.664-.243-.542-.011a16.287,16.287,0,0,1,1.449,4.867H6.662a.436.436,0,0,0,0,.873h21.9a.4.4,0,0,1,.4.4v.533a.4.4,0,0,1-.4.4H1.274a.4.4,0,0,1-.4-.4v-.533a.4.4,0,0,1,.4-.4H6.958a.436.436,0,1,0,0-.873H3.184A11.762,11.762,0,0,1,14.135,3.061h0q.178-.012.352-.018l.069,0,.123,0,.235,0c.1,0,.209,0,.313,0l.092,0,.24.011.127.007c3.584.235,7.463,3.09,9.515,6.078a.437.437,0,1,0,.72-.494C23.908,5.7,20.182,2.787,16.709,2.29a2.125,2.125,0,0,0,.34-1.152c0-.237-.106-.675-.815-.935a4.375,4.375,0,0,0-2.629,0c-.709.261-.815.7-.815.935a2.128,2.128,0,0,0,.338,1.15A12.639,12.639,0,0,0,2.309,14H1.274A1.275,1.275,0,0,0,0,15.278v.533a1.275,1.275,0,0,0,1.273,1.274h4.7a5.409,5.409,0,0,0-.67.541l-.009.008a.4.4,0,0,0-.038.04L3.187,20.191a1.2,1.2,0,0,0-1.643.341l-.815,1.2a1.207,1.207,0,0,0,.321,1.674L6.627,27.2A1.2,1.2,0,0,0,7.3,27.4a1.225,1.225,0,0,0,.229-.022,1.2,1.2,0,0,0,.771-.508l.815-1.2A1.207,1.207,0,0,0,8.8,24l-.032-.022a2.822,2.822,0,0,1,1.469-.886,9.593,9.593,0,0,1,3.529.059,8.338,8.338,0,0,0,3.558-.192l1.607-.444a8.275,8.275,0,0,0,2.929-1.481l.019-.016,2.759-2.444a1.347,1.347,0,0,0,.41-1.488h3.521a1.275,1.275,0,0,0,1.273-1.273v-.533a1.275,1.275,0,0,0-1.273-1.273ZM14.92.873a2.045,2.045,0,0,1,1.256.283,1.257,1.257,0,0,1-.556,1.025l-.255-.011-.085,0c-.122,0-.242-.005-.36-.005l-.255,0-.125,0-.15.005-.171.008a1.256,1.256,0,0,1-.556-1.025A2.045,2.045,0,0,1,14.92.873ZM18.05,17.3a1.44,1.44,0,0,0-.115-.211h4.187l-1.81,1.2-2.58.746-.088,0A1.485,1.485,0,0,0,18.05,17.3Zm-4.733-.211-.63.131-.487-.131Zm-4.923,8.1-.815,1.2a.332.332,0,0,1-.462.089L1.54,22.685a.333.333,0,0,1-.088-.462l.815-1.2a.33.33,0,0,1,.213-.14.333.333,0,0,1,.063-.006.329.329,0,0,1,.186.058l.3.2h0l5.275,3.584a.333.333,0,0,1,.088.462Zm15.705-7.3-.03.024-2.762,2.447A7.407,7.407,0,0,1,18.7,21.673l-1.607.444a7.453,7.453,0,0,1-3.182.172,10.393,10.393,0,0,0-3.869-.048,3.708,3.708,0,0,0-2,1.244l-4.126-2.8,2-2.432a4.109,4.109,0,0,1,2.638-1.166h.018a3.291,3.291,0,0,1,.907.169l.192.053,2.89.78a.436.436,0,0,0,.2.006l3.785-.789a.651.651,0,0,1,.495.1.586.586,0,0,1,.208.249.611.611,0,0,1-.283.789l-1.291.684a.436.436,0,0,0,.214.822l1.916-.041a.44.44,0,0,0,.112-.017l2.7-.781a.437.437,0,0,0,.12-.055l2.723-1.8c.229-.141.533-.257.695-.018a.52.52,0,0,1-.056.657Zm0,0" transform="translate(0 0)" /></svg>
                                </div>
                                <div className="pos-table-bar-cap">Take Away</div>

                            </a>
                        </li>
                        <li className="nav-item" onClick={() => props.changeOrderType(ORDERTYPES.DELIVERY)}>
                            <a className={`nav-link ${props.activeOrderType === ORDERTYPES.DELIVERY ? "active" : ""}`} href="/#">
                                <div className="text-center mb-1">
                                    <svg className="option-tab-svg" xmlns="http://www.w3.org/2000/svg" width="40" height="27.008" viewBox="0 0 40 27.008"><path d="M37.939,17.56A1.107,1.107,0,0,0,38.591,16q-.051-.1-.1-.193l-.033-.056c-.026-.044-.051-.088-.078-.131l-.046-.071c-.023-.037-.047-.074-.071-.11l-.054-.077c-.023-.033-.046-.066-.07-.1l-.06-.079c-.023-.031-.046-.061-.07-.091l-.065-.079-.07-.085-.07-.079-.072-.08-.073-.077-.073-.075-.078-.076-.074-.071-.081-.074-.076-.067-.085-.072-.078-.063-.088-.069-.079-.059L36.85,14l-.08-.056-.094-.064-.082-.052-.1-.061-.082-.048-.1-.058-.083-.044-.1-.055-.083-.04-.108-.052-.081-.036-.114-.05-.04-.016c-.085-.035-.172-.067-.258-.1l-.1-.034-.1-.032-.1-.033-.1-.028-.107-.03-.1-.024-.111-.026-.1-.02-.114-.022-.1-.017-.116-.018-.1-.013-.118-.014-.1-.01-.12-.01-.1-.006-.122-.006-.1,0H33.3l-.125,0-.1,0-.046,0L31.984,11.1a.569.569,0,0,0-.989.563l1,1.753c-1.008.972-3.793,4.027-3.678,8.006a4.425,4.425,0,0,1-1.061.11H17.139v-.893a6.374,6.374,0,0,0-6.367-6.367H7.1A26.792,26.792,0,0,0,2.879,15.76a.593.593,0,0,0-.388.72.569.569,0,0,0,.714.373c.064-.02.062-.035.288-.12A23.577,23.577,0,0,1,7.1,15.41h3.674A5.234,5.234,0,0,1,16,20.638v.894H1.3a.161.161,0,0,1-.063-.013.163.163,0,0,1-.1-.15,5.97,5.97,0,0,1,1.944-4.4c.028-.026.076-.073.122-.112.234-.117.262-.559.056-.8s-.017-.573-.8-.058a7.083,7.083,0,0,0-.852.876A9.276,9.276,0,0,1,10.4,10.517h8.909l-1.162,3.166a5,5,0,0,0,.548,4.507,4.813,4.813,0,0,0,3.865,2.154c.058,0,.117,0,.175,0h3.1a2.4,2.4,0,0,0,2.347-1.92c1.06-3.932-.45-9.178-1.272-11.558h1.351l2.722,4.792a.569.569,0,0,0,.989-.563l-2.4-4.228h1.213A1.008,1.008,0,0,0,31.8,5.862V3.188a1.008,1.008,0,0,0-1.253-.977L25.729,3.42l.127-.032-.186-.226a.624.624,0,0,0,.126-.177.634.634,0,0,0-.085-.668L24.51.86A.991.991,0,0,0,23.734.5L21.239.523a.889.889,0,0,0-.884.888V2a1.372,1.372,0,0,0,1.374,1.37l2.6-.019.578.7a1.285,1.285,0,0,0-.154.612V5.679l-2.422.456a.578.578,0,0,0,.106,1.146.561.561,0,0,0,.107-.01l2.716-.511a.944.944,0,0,0,.442.11h0c.74,2.055,2.422,7.426,1.375,11.278,0,.014-.007.028-.01.042a1.257,1.257,0,0,1-1.233,1.019h-3.1l-.137,0a3.686,3.686,0,0,1-2.959-1.652,3.812,3.812,0,0,1-.424-3.479L20.491,10.6h.264a.628.628,0,0,0,.615-.753,5.59,5.59,0,0,0-.754-1.855,3.223,3.223,0,0,0-2.778-1.573H14.1a.955.955,0,0,0-.88.587,5.828,5.828,0,0,0-5.185-4.94v-.6a.569.569,0,0,0-1.139,0v.6A5.825,5.825,0,0,0,1.659,7.6,1.152,1.152,0,0,0,.65,8.745v.622a1.151,1.151,0,0,0,1.15,1.15H3.625v1.377A10.378,10.378,0,0,0,0,19.777v1.591a1.3,1.3,0,0,0,1.3,1.3H3.313a5.605,5.605,0,0,0,11.1,0H27.254a5.257,5.257,0,0,0,1.563-.213,5.605,5.605,0,1,0,9.122-4.9ZM29.646,3.61l1.011-.254V5.731H29.646ZM21.725,2.236a.232.232,0,0,1-.232-.231V1.659l2.183-.022.479.581Zm4.169,3.494V4.669a.148.148,0,0,1,.112-.144l2.5-.629V5.731ZM14.288,9.366V7.555h3.55a2.458,2.458,0,0,1,2.212,1.823H14.288ZM4.763,11.042v-.525h.908A10.356,10.356,0,0,0,4.763,11.042ZM7.469,3.174A4.684,4.684,0,0,1,12.14,7.594H2.8A4.684,4.684,0,0,1,7.469,3.174ZM1.8,9.378a.012.012,0,0,1-.012-.012V8.745A.012.012,0,0,1,1.8,8.733H13.138a.012.012,0,0,1,.012.012v.622a.012.012,0,0,1-.012.012Zm9.222,13.291a2.289,2.289,0,0,1-4.313,0Zm-2.156,3.7a4.451,4.451,0,0,1-4.4-3.7h1.06a3.427,3.427,0,0,0,6.68,0h1.061A4.451,4.451,0,0,1,8.866,26.368ZM29.632,20.33c-.02.052-.042.1-.065.148l-.005.011-.013.025c-.02.04-.042.078-.064.115l-.013.02c.261-3.4,2.874-6.01,3.482-6.574h.006l.071,0,.114-.007.07,0,.114,0h.182l.073,0,.108,0,.075.005.1.008.077.009.1.012.079.011.1.015.081.014.092.018.082.018.089.02.083.021.086.023.084.024.082.025.085.028.079.027.085.031.075.029.085.035.073.031.085.038.07.034.085.042.067.035.084.045.065.037.083.049.063.039.081.052.06.041.08.056.059.043.078.059.057.045.075.061.056.048.073.064.054.05.07.066.052.052.068.069.051.055.065.071.049.057.062.073.047.06.059.075.045.063.056.077.044.065c.018.027.035.052.052.079l.04.065c.017.028.034.056.051.084l.03.054c.019.032.037.065.055.1l-.157,0-.061,0-.1,0-.115.005-.057,0-.144.009-.034,0-.156.011-.03,0-.162.014-.029,0-.179.018-.018,0-.187.022-.015,0-.193.025-.014,0-.2.029-.012,0-.207.034-.009,0-.2.037-.017,0-.2.041-.019,0-.2.045-.022,0-.2.049-.025.006-.2.053-.031.008-.2.056-.035.01-.193.06-.042.013-.188.063-.048.016c-.061.021-.123.044-.184.066l-.052.019-.18.069-.057.022-.173.072-.064.027c-.056.024-.111.049-.167.074l-.069.031-.161.077-.075.036-.154.08-.08.042-.148.082-.084.047-.142.085-.088.052-.137.088-.091.058-.131.089-.094.065L31.2,18.4l-.053.039-.056.042-.063.049-.092.074-.062.049-.031.025q-.084.07-.167.143l-.011.01-.023.02a3.8,3.8,0,0,0-1.009,1.476,0,0,0,0,1,0,0Zm6.2.515-.551-1.055a2.287,2.287,0,1,1-3.1,1.532l.588,1.125a1.72,1.72,0,0,0,1.016.85,1.74,1.74,0,0,0,.52.08,1.732,1.732,0,0,0,1.531-2.532ZM34.573,22.17a.592.592,0,0,1-.8-.251l-1.091-2.088,0,0-.409-.783q.116-.074.237-.144l.019-.011c.074-.043.149-.085.225-.125l.054-.029c.068-.036.138-.072.208-.106l.082-.039.152-.071.068-.031.418.8.013.024,1.076,2.059a.592.592,0,0,1-.25.8Zm-.179,4.2A4.472,4.472,0,0,1,29.928,21.9c0-.016,0-.031,0-.047a2.625,2.625,0,0,0,.336-.353l.02-.026q.058-.075.111-.155c.02-.029.039-.059.057-.089s.031-.05.045-.075.029-.053.043-.079l.019-.035.027-.054c.008-.016.015-.032.023-.048l.005-.012.018-.038c.022-.049.043-.1.062-.15v0c0-.011.009-.021.013-.031a2.725,2.725,0,0,1,.2-.408,2.676,2.676,0,0,1,.444-.551l.157.3A3.427,3.427,0,1,0,34.6,18.479l-.2-.387a11.107,11.107,0,0,1,1.618-.355,4.467,4.467,0,0,1-1.618,8.631Zm0,0" transform="translate(0 -0.498)" /></svg>
                                </div>
                                <div className="pos-table-bar-cap">Delivery</div>

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
export default OrderTypeSelectionUI
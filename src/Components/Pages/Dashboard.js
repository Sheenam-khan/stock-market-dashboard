import React,{Fragment, useState} from 'react'
import Setting from "../../assets/svg/settings_black_24dp.svg"
import VerticalDots from "../../assets/svg/more_vert_black_24dp.svg"
import HorizontalDots from "../../assets/svg/more_horiz_black_24dp.svg"
import Tesla from "../../assets/images/tesla.PNG"
import Graph1 from "../../assets/images/graph1.PNG"
import Graph2 from "../../assets/images/graph2.PNG"
import Netflix from "../../assets/images/netflix.PNG"
import Bitcoin from "../../assets/images/bitcoin.PNG"
import UpArrow from "../../assets/svg/north_west_black_24dp.svg"
import DownArrow from "../../assets/svg/south_east_black_24dp.svg"
const initialSummary=[{
    Opentext:'Open',
    Openvalue:'10,890',
    Hightext:'High',
    Highvalue:'10,890',
    WeekText:'52WK High',
    WeekValue:'10,890',
    value:'apple'
},{
    Opentext:'Open',
    Openvalue:'11,890',
    Hightext:'Low',
    Highvalue:'11,890',
    WeekText:'52WK Low',
    WeekValue:'11,890',
    value:'tesla'
},{
    Opentext:'Open',
    Openvalue:'10,890',
    Hightext:'High',
    Highvalue:'10,890',
    WeekText:'52WK Low',
    WeekValue:'10,890',
    value:'apple'
}]

const Dashboard=(props)=>{
const [Summary,SetSummary] = useState(initialSummary)
    const buyStocks=(value)=>{
     let summary=initialSummary.filter((item)=>item.value==value)
     SetSummary(summary)
    }

  return (
    <Fragment>
            <div className="row w-70">
              <div className="col-md-12">
                <div className="d-flex justify-content-between flex-wrap">
                  <div className="d-flex align-items-end flex-wrap">
                    <div className="me-md-3 me-xl-5">
                      <h1 className='page-title'>Stock Market</h1>
                      <p>Trending market group</p>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-12 mb-3">
                <b
                  style={{ float: "right" }}
                >View All</b>
              </div>

            </div>
            <div className="row">
              <div className="col-xl-4 col-12">
                <div id="crypto-stats-1" className="card pull-up">
                  <div className="card-content">
                    <div className="card-body pb-0">
                      <div className="row">
                        <div className="col-2">
                          <div className="brand-logo">
                            <img className="avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACsElEQVRoge3Zu4sVZxjH8Y9xzWohKsgiXhvBQkwIQUUEL+BdQawURAwWKYT8B0IsLCwEFQttLLSxsBAF8QJWKWyNN0RkUfGCuKLZ9bYm7rF4HVjOntmcd945O1PsF57mnHdmfl9m5p13nmGcZH7BKfyNP1J31pUcJ54FgsCmYb9NriBHEtvRj0ZT7a0yVCw78MVIiQYWVZgrioUY0FriHiZUFy2OG1pLNPB7hbmiWCZf4hYmVRctjpNaS/yDnyvMFc0dIyUGsLLKUEVonqn+Em7+UkmZLSZgPmbiXzwRLpdmBr7XTZzGVQwN+38m5mKi8IzpxdeEXG2zAmfQZ+QlcweH8Ouw8c038w9Yg+N43GIf/YLwik4JzMHFFgfOq14cxW6swy4cw7OIfVz+ftzSWIM3EQHKrLfYVobEBgxWJJHVILamSCzG+4olsrql4Cq5C7drINAQlv3dRSRgXw0EGjhSVIAwp/fWQOK6MF0XZnkNJL6IWAHk2W5sdwcd5AIetTs4T6RjT9UIzscMzhOZV0KQVG7GDM5bNL7DtPQshflPmG6H/m9gRt4ZmVJKnDTaliBf5FMJQVLowoyYDeoqAktiBueJvCghSCqbYwbniTwoIUgq+0QsEvNE7peTJYkeJTS316t+idLAB4kto275Lc6xrqcSe8MXaiCR1WuhCV6IPTUQaK7r+ClWpBuvahB+eA3Jeb6M9tIyKPSX6sQloXcWzTx8Vv2ZyM7GsiISGYdrINHA2RQJmCosWaqU6MfsVBH4rWKR/WVIZMT0fcusa0r+xtiDl2Ms8RKzypTIWGrsli4fhLZUx9io803tQWzppETGaqNfZn04IbwcLRReW+cK3w0P4OEo277AqrGQyJiGP3FXeGj24Qp24sc2tl+Lc3iOj8I70EFM70TYccYpyDfcUic1Gs2m3wAAAABJRU5ErkJggg==" />                                  </div>
                        </div>
                        <div className="col-5 pl-25 py-1" style={{ paddingLeft: "25px" }}>

                          <h4>AAPL</h4>
                          <h6 className="text-muted">Apple</h6>
                        </div>
                        <div className="col-5  text-end">
                          <img src={VerticalDots} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                          <img src={Graph1} width="200" height="100" />


                        </div>
                        <div className="col-6 mt-5 text-end">
                          <h4><b>$10.980</b></h4>
                          <h6 className="success darken-4"> <i style={{ color: "green" }} className="fa fa-arrow-up" />31%</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">
                <div id="crypto-stats-1" className="card pull-up">
                  <div className="card-content">
                    <div className="card-body pb-0">
                      <div className="row">
                        <div className="col-2">
                          <div className="brand-logo">
                            <img className="avatar" src={Tesla} />                                  </div>
                        </div>
                        <div className="col-5 pl-25 py-1" style={{ paddingLeft: "25px" }}>

                          <h4>TESLA</h4>
                          <h6 className="text-muted">Tesla Motors</h6>
                        </div>
                        <div className="col-5 text-end">
                          <img src={VerticalDots} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                          <img src={Graph2} width="200" height="100" />


                        </div>
                        <div className="col-6 mt-5 text-end">
                          <h4><b>$10.980</b></h4>
                          <h6 className="success darken-4"><i style={{ color: "green" }} className="fa fa-arrow-up" /> 31% </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">

                <div id="myProfile-home" className="card pull-up">
                  <div className="card-content">
                    <div className="card-body pb-5">
                      <div className="userPortfolio">
                        <h2> <b>My Portfolio</b></h2>
                      </div>
                      <div className="row">
                        <div className="col-2">
                          <div className="brand-logo"
                            style={{ fontSize: "30px" }}
                          >

                            <i className="fa fa-line-chart avatar"

                              style={{ padding: "10px 15px 0px 15px" }}
                            />
                          </div>
                        </div>
                        <div className="col-7 px-3">
                          <h6 className="text-muted">Gain</h6>
                          <h4>+$10.278,00</h4>
                        </div>
                        <div className="col-3 text-end">

                          <img src={HorizontalDots} />

                        </div>
                      </div>
                      <div className="row py-5">
                        <div className="col-2">
                          <div className="brand-logo"
                            style={{ fontSize: "30px" }}
                          >
                            <i className="fa fa-bar-chart avatar"
                              style={{ padding: "10px 15px 0px 15px" }}
                            />
                          </div>
                        </div>
                        <div className="col-7 px-3">
                          <h6 className="text-muted">Investment</h6>
                          <h4>+$1.274,00</h4>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="row w-70">
              <div className="col-md-12">
                <div className="d-flex justify-content-between flex-wrap">
                  <div className="d-flex align-items-end flex-wrap">
                    <div className="me-md-3 me-xl-5">
                      <h3><b>Most popular week</b></h3>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-12 mb-3">
                <img
                  style={{ float: "right" }}
                  src={HorizontalDots} />
              </div>
            </div>
            <div className="row">
              <div className="col-2 p-3">
                <div id="popularStock1" className="card pull-up">
                  <div className="card-content">
                    <div className="card-body p-4">
                      <div className="col-2">
                        <div className="brand-logo">
                          <img className="avatar stockLogo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACeUlEQVRIie2Sy2sTURTGv/uczGQmmZgmDX3YFmxtqw1aCj5aXOhK3Al240oQRFBwI/gPSDduBK17V+JC0EVX0pUgbhSKKNUqGK1oY9MmM5nJZCZzXfgqtZQiBTf9wVmdc777nY8L7LDD/6QNlE5TSiu6rh/ZTmENwFVCiEMIiRkXSkvoSwDEdogLQugCAGXnCqo4cUINHDykACgjlb6z0QLdojABMAIgopxzITXsKY5CT5rI5AvIFjrhu84FmUyO/MsDh4WmvQYwZ5ipWy2o01HYVKX5V78HeoeK4FwQEquZ9ZpsE+EeqSXut1rRFOOizbBS8NzamEwkbnPKZa1SHrUyWSSMJChjEJqG8mIpZViWCJvN2bWnbwhl/ItScXtHXz86+vrRakWYezILxnkp8L1hLsQHxkW2OH4clP3w+eb5M1SXy7EQfG8QBAt/RaTrelcybd8AkOZCziilkM7mfjiUGnoG9yPwvd1Gyr4GpSYD38Ond/N/ohouglBCCReP1kdkWPauad/37zZ9b1w3raOBVz/LhbxYrZT1fGcPCKUwrDTq1RXUq6sTnPPrjMuu2vLSkJ1rh9QSYFyAcYFvnz/mkpbths3GU2ra9mUuZcVZrZy32/I0390L33WO6aZ5CiqebNRdLK5x2bfvwC+XD5uBf44y7rx/+QJKxQCA9u5eWJksGr47BaDAWlH0uBWGhp0rwLQzYIzBWalAQZ2MwvCK1PTh6vLSIAC41RV4bg1RGMJzqjnNMEuxiu81fe9M4HtoeHU4qxX8nGUJPTkGoemXQEgMQK0tQmgIYACAzTj/ur4PQFHKbwIAl/LBRn0Q8naTX7rDDlvkO9Qf5+lNx9DPAAAAAElFTkSuQmCC" />
                        </div>
                      </div>
                      <div className="col-12 pl-2">
                        <h5 className="stockCode">ADS<span className="text-muted stockName">Adidas</span></h5>
                        <h3>$1200</h3>
                        <p><b>20%</b> this week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 p-3">
                <div id="popularStock2" className="card pull-up">
                  <div className="card-content">
                    <div className="card-body p-4">
                      <div className="col-2">
                        <div className="brand-logo">
                          <img className="avatar stockLogo" src="data:image/png;base64,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" />
                        </div>
                      </div>
                      <div className="col-12 pl-2">
                        <h5 className="stockCode">SHOP<span className="text-muted stockName">Shopify</span></h5>
                        <h3>$1620</h3>
                        <p><b>55%</b> this week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 p-3">
                <div id="popularStock3" className="card pull-up">
                  <div className="card-content">
                    <div className="card-body p-4">
                      <div className="col-2">
                        <div className="brand-logo">
                          <img className="avatar stockLogo" src="data:image/png;base64,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" />
                        </div>
                      </div>
                      <div className="col-12 pl-2">
                        <h5 className="stockCode">DBX<span className="text-muted stockName">Dropbox</span></h5>
                        <h3>$620</h3>
                        <p><b>5.5%</b> this week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 p-3">
                <div id="popularStock4" className="card pull-up">
                  <div className="card-content">
                    <div className="card-body p-4">
                      <div className="col-2">
                        <div className="brand-logo">
                          <img className="avatar stockLogo"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAGyElEQVRoge2Zf4wdVRXHP2dm+mN1u5IWa1ONQhHcxlDBgCjpH40G2i10d+fNvtIYqE0UNMaSaKKuUKG0TVOiMQaNKSWWJaTSOPt+7Ma1Wn9hokRM/xANomQbfxRLCaXGpbTd3Xlz/OPdN292d+a9efv2P3qSl9xz7/d8zzn33rm/HlyWy/L2FlloQnXdFVjWF1DtA64x1eNAmcnJgzI29t+F9LegCajnbSYMn0GkKwXyP1S3San0s4XyuWAJaC7nAj5gN4EGqA5IqTSyEH6thSDRfP7dwOPUgx8H8tj2Cmx7BapbgZOmzUHkkLFpW5yFIKFSeQSoBTSObd8ivn8uhvDVdX+NyB+BNcBKY/PFdl23PYU0n7+aSuVvwOIqo2ySQuHniVjX3YTIMaNOYdvd4vv/aMd/+1OoUnmIWvDw+7TgAczH+1ujLqZS+Wa77ttKQF33OuDuOpu1q7mRxjHb1XXXthNDeyMgsofad6R6XIaHn21qUir9DviFUW1EHmonhHknoH191wP5emTycGZjkQcANdpd6rofmW8c8x8B294Xsx+VYvEPWU2lUDgB/KSmYlmPzDeMeSWgnncTsKWmEobZe78mlcqDQFhl0D71vFvmE8v8RkB1P7UlWNWXcvlPrVLIyMhfEClEFWG4Zz6htJyAuu564DajVoDd83EMQBjuAgIARG7XgYENrVK0PgIi+2LaESmVXmqZo0ZVKr0MPBNVhOG+dHQKRyvgWTvpNGG4Vsrlk7MwKxHZicidqF5rql8GxrDtx8T3X5+B7++/Bst6CVhUjSh9J0+SzCOgIIjsjSpEhuYEn8sNIDIO7EL1BuCd5ncjsIsgGFfXzcVtpFw+ichQnUT3agsdm30Ked6dwE1GmyQI9sabNZcbAH4MLEvlEOlCxJ+dBJa1D5g02s247h1Zw8qegGr83HJIRkZORU2uuxI4TL3nTiEyQBB0EQRdQA7Vv0c+RQ7Hj9Pi+/8GnojYRTKfkTIloJ63GbjZqBew7f0zACI7qff8KWz7BikUCjI6+qaMjr4pxWIJx7kVeMVg3kUQfGmWm/3ABVP+mLrupgVLYEbvqx4U3z8zC7ElKol8edZdoFrt++dQ/UoMt2VGe7H4KiKPx9oznZGaJqCetxH4uFEvIvLtBNiaqDQ9fTyV7NKl+OrywbnO9FvAJaN9Ql33tjmYWdJ8BOLHX5EnpFh8tSHPkiWa0F6VRYvibXNWGjMKP4z5a7pJNkxABwY+Baw36qTpoSQ5HZWmpz+USug43XVy/U8iJggeBaaMdqu67icbxdh4BCqVr0VlkSelWHwlEaf6fFS27UZLYL1N5PkkgFndhmK4rzYKMTUBdd21iNTm4DSVyqMNeMbqhnqvbtgw57FA77tvEXBvLLCx2ZhIbPsAMG20jep53WnQ9BGoLo21eepLufzPVKzjjCBSe3F7H8uXe3MwZ8/mgdVGO8eyZaOprqsX/dpJVVDd2VIC2t9/BXBPnVEeSw2+6vAiYfiDWNV+3bFjacSXz3cA9YOa6vdlaOgSjcSyvhfTdmg+vzwRlhyRbAc6jXZCCoXE+TpDHOc7wFmjrWFioj53K5WvA1cb7XWmpr7bjE6Gh58DThj1HQTB3Um4tAR6orLqoWbOwGxU8I1Y1YPqeTdqLvfRGfUig5kfeOO+4zHFJO0buD4qOc4vMzkDWLfuMFC7Gy9B9UfAEervRs9RKDyZmc+yfpUYUxySYnplVDp//nQKZo7I7t0htn0PqhOmqtv8QHWCMNwu9deI5nLhQnyvuDIJkpbAG1Fp8eKVmR0C4vvjWNbgXE/W4Oz7Q1Pp6FiVGFOcNsX0r1HJtje34lN7e1ejev/cBr1fe3tXJ5iki0jc94tJkLSPOP52P6i9vemXlJhof/9VOM6z1KZN9cIemHI3jvMbzeU+kImrp6cL1fpIqib+n5CcgGUNAa8Z7Socp6A9PWn/uqAgmst9DpEXgNo9eBqRbYhso76rXofqnzWX+2yja6P29HTR0TEMvN9UncFxnkrCppN43lZUj8Yw/0L1AI7zU+AMlcoKwnA1lrUR+DTw4Zj5FCJ3SaFQhujfm6PUVyOoTokjhOFxLOs0tv0GsIowvMP0fC14BbZKsTjcUgImicEZj1jZ5BSWtc1sRHUu112PyFHgvS1wKSIPSKFwIA3QNDB13bw5SqxqAn0LOMjFi3vk2LGJJID29HSxdOnDiHye6mtFIzkD7Ezr+Zpk6lnN5zsJgs8g0kd1qrwHOA+8hsgLqB5ncrKQdYfVfH45QeAhcjuwzvB1Uv3uXkR1hM7OIXn66bey8F2Wy/J2lv8DRkZGOnpS4M4AAAAASUVORK5CYII=" />
                        </div>
                      </div>
                      <div className="col-12 pl-2">
                        <h5 className="stockCode">ABNB<span className="text-muted stockName">Airbnb</span></h5>
                        <h3>$1740</h3>
                        <p><b>56%</b> this week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">

                <div id="myProfile-home" className="card pull-up">
                  <div className="card-content">
                    <div className="card-body pb-5">
                      <div className="userPortfolio">
                        <h3> <b>Recent Activities</b></h3>
                      </div>
                      <div className="row">
                        <div className="col-2">
                          <div className="brand-logo"
                            style={{ fontSize: "30px" }}
                          >

                            <img src={Bitcoin}
                              //  className="img-circle"
                              style={{ width: "55px", height: "55px", padding: "10px 15px 0px 15px" }}
                            />

                          </div>
                        </div>
                        <div className="col-7 px-3">
                          <h6 className="text-muted">Crypto (Bitcoin)</h6>
                          <p>Profit :12%</p>
                          {/* <h6>+$10.278,00</h6> */}

                        </div>

                        <div className="col-3 text-end">
                          <h6>+1600,00</h6>
                      
                        </div>
                        {/* <div className="info-box-progress">
                                        <div className="progress progress-xs progress-squared bs-n">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                            </div>
                                        </div>
                                    </div> */}

                      </div>
                      <div className="row py-5">
                        <div className="col-2">
                          <div className="brand-logo"
                            style={{ fontSize: "30px" }}
                          >
                            <img src={Netflix}
                              //  className="img-circle"
                              style={{ width: "55px", height: "55px", padding: "10px 15px 0px 15px" }}
                            />

                          </div>
                        </div>
                        <div className="col-7 px-3">
                          <h6 className="text-muted">Netflix</h6>
                          <p>Profit :12%</p>

                        </div>
                        <div className="col-3 text-end">
                          <h6>+1600,00</h6>
                          {/* <img src={VerticalDots}/> */}

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="row w-70 pb-3">
              <div className="col-md-12">
                <div className="d-flex justify-content-between flex-wrap">
                  <div className="d-flex align-items-end flex-wrap">
                    <div className="me-md-3 me-xl-5">
                      <h3><b>Transaction</b></h3>
                    </div>
                     </div>
                </div>
              </div>


            </div>
            <div className="row">

              <div className="col-xl-8 col-12">

                <div id="myProfile-home" className="card pull-up">
                  <div className="card-content">
                    <div className="card-body pb-5">

                      <div className="row">

                        <div className="col-2">
                          <div className="brand-logo">
                            <img className="avatar stockLogo"
                              src={UpArrow} />
                          </div>

                        </div>
                        <div className="col-4">
                        <h6><button style={{border:"none",background:"none"}} onClick={()=>buyStocks("apple")}>Buy Apple Stock</button></h6> 
                          <span className="text-muted">Stock investment</span>
                        </div>
                        <div className="col-3">
                          <h6 className="text-muted">Interest rate <b>2 %</b></h6>

                        </div>
                        <div className="col-3">
                          <h4><b>$10,278</b></h4>
                        </div>
                      </div>
                      <div className="row py-5">

                        <div className="col-2">
                          <div className="brand-logo">
                            <img className="avatar stockLogo"
                              src={DownArrow} />
                          </div>

                        </div>
                        <div className="col-4">
                          <h6 ><button style={{border:"none",background:"none"}} onClick={()=>buyStocks("tesla")}>Buy Tesla Stock</button></h6>
                          <span className="text-muted">Stock investment</span>
                        </div>
                        <div className="col-3">
                          <h6 className="text-muted">Interest rate <b>2 %</b></h6>

                        </div>
                        <div className="col-3">
                          <h4><b>$10,278</b></h4>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-12">

                <div id="myProfile-summary" className="card pull-up">
                  <div className="card-content">
                    <div className="card-body pb-5">
                      <div className="userPortfolio">
                        <h3> <b>Summary</b></h3>
                        <hr />

                      </div>
                    
    {Summary.map((item,index)=>(
     <div key={index} className="row py-2">
     <div className="col-4">   
     <h6 className="text-muted">{item.Opentext}</h6>
                          <h6><b>{item.Openvalue}</b></h6>
                        </div>
                        <div className="col-4">
                          <h6 className="text-muted">{item.Hightext}</h6>
                          <h6><b>{item.Highvalue}</b></h6>
                        </div>
                        <div className="col-4">
                          <h6 className="text-muted">{item.WeekText}</h6>
                          <h6><b>{item.WeekValue}</b></h6>
                        </div>
                        </div>
    ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

    </Fragment>
  )
}

export default Dashboard
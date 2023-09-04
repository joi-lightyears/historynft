import React from 'react'
import "../../styles/collectionPage.scss"

export default function Collection(){
    return (
        <main className='collectionPageContainer'>
            <section className="bannerContainer">
                <div className="bannerBg">
                    <div className="bannerBgOverlay"></div>
                    <div className="bannerContent">
                        <div className="badge">Series 1</div>
                        <h2>Binh Ngo Dai Chien</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        <p>Lorem ipsum
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className="inline-block ml-1 -mt-[3px]"><path fill="currentColor" fill-rule="evenodd" d="M14.823 7.08l-.045-.027c-.31-.196-.72-.457-.72-.631a2.39 2.39 0 01.282-1.068l.004-.007c.258-.648.522-1.308.188-1.796-.337-.487-1.056-.435-1.744-.381a2.286 2.286 0 01-1.024 0 2.543 2.543 0 01-.353-1.023c-.085-.39-.173-.785-.335-1.092-.127-.242-.3-.428-.552-.512-.574-.19-1.086.282-1.599.764l-.022.018c-.287.26-.663.593-.857.593-.2 0-.596-.352-.888-.611C6.653.842 6.126.367 5.56.543c-.566.176-.757.879-.91 1.574-.048.36-.17.705-.36 1.015a2.165 2.165 0 01-1.025 0 5.487 5.487 0 00-.89-.031c-.35.027-.654.133-.845.413-.34.496-.083 1.133.174 1.773v.002l.01.026c.177.33.276.695.29 1.07-.062.183-.49.458-.803.656C.612 7.408 0 7.804 0 8.416c0 .61.612 1.008 1.201 1.38l.097.062.005.003c.3.19.666.421.7.586a2.45 2.45 0 01-.29 1.077l-.002.005c-.259.647-.524 1.308-.181 1.796.343.49 1.056.436 1.735.375.341-.066.69-.053 1.025.037.188.312.31.656.36 1.015.153.695.314 1.421.88 1.612.08.048.167.081.26.099a2.293 2.293 0 001.338-.764l.038-.033c.09-.08.188-.17.288-.252.215-.178.432-.332.562-.332.188 0 .548.321.833.575l.047.042.023.021c.505.452 1.025.916 1.575.743.557-.176.765-.916.887-1.61a2.54 2.54 0 01.351-1.016 2.31 2.31 0 011.025-.04h.022c.682.064 1.375.125 1.723-.373.337-.485.088-1.105-.165-1.73l-.027-.072a2.435 2.435 0 01-.284-1.077c.046-.155.36-.37.626-.552l.14-.096c.264-.166.531-.336.748-.527.27-.238.46-.511.46-.856 0-.617-.581-1.067-1.177-1.434zm-3.312-.235a.763.763 0 00-.094-1.076.766.766 0 00-1.078.094L7.045 9.78 5.75 8.381a.766.766 0 00-1.08-.043.763.763 0 00-.044 1.08L7.1 12.09l4.412-5.246z" clip-rule="evenodd"></path></svg>
                        </p>
                        <div className='date'>
                            Collect before inventory snapshot on Oct 4th, 2023 at 11 AM PT
                        </div>
                        <div className="bannerBtns">
                            <div className="wrapper">
                                <button>Marketplace options</button>
                                <button>How it works</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="store">
                <div className="storeWrapper">
                    <div className="left">
                        <span>
                            <img src="https://res.cloudinary.com/dpaccount/image/upload/w_800,q_40,b_rgb:090909,f_auto/prod/drops/129-AD666F63-D55B-4230-912D-D703B9253B8C/packs" alt="" />
                        </span>
                    </div>
                    <div className="right">
                        <div className="infoPacks">
                            <h3>
                                Start with a pack
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Quisquam, voluptatum.
                            </p>
                            <div className="pack">
                                <div className="wrapper">
                                    <div className="content">
                                        <div className="rleft">
                                            <span>
                                                <img src="https://res.cloudinary.com/dpaccount/image/upload/w_150,q_40,b_rgb:171717,f_auto/prod/drops/129-AD666F63-D55B-4230-912D-D703B9253B8C/pack1" alt="" />
                                            </span>
                                        </div>
                                        <div className="middle">
                                            <h4>Standard Pack</h4>
                                            <p>18,750 Minted</p>
                                            <a href="">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.54645 0.139271C7.12504 0.225115 6.87531 0.37339 6.50072 0.747981C5.95444 1.30206 5.59546 2.09807 5.35353 3.26867C5.24428 3.79934 5.19745 4.1193 5.11161 5.15723C5.10452 5.21393 5.09905 5.27223 5.09445 5.32118L5.09445 5.3212C5.08891 5.38006 5.08465 5.4254 5.08039 5.43818C5.08039 5.46159 4.97894 5.485 4.86188 5.49281C4.44827 5.50061 3.55081 5.6723 2.84845 5.8674C1.03793 6.37466 0 7.28772 0 8.37248C0 8.87193 0.109256 9.1997 0.437023 9.66794C0.913066 10.3313 1.63103 10.9088 2.67677 11.4472C3.02795 11.6267 3.30109 11.7516 3.27767 11.7282C3.26915 11.7225 3.22336 11.6878 3.15125 11.6332L3.15118 11.6332L3.15113 11.6332C3.02521 11.5378 2.8191 11.3818 2.59092 11.2131C-0.273139 9.09825 -0.0468239 7.34235 3.17622 6.67901C4.22196 6.4605 5.12722 6.39026 5.12722 6.53074C5.13502 6.95995 5.25208 8.16177 5.33793 8.74707L5.44718 9.44943L5.03357 9.9957C2.19292 13.7572 1.62323 17.1598 3.67568 18.065C7.21088 19.6258 15.7094 12.0403 17.3014 5.90642C17.5121 5.0948 17.559 3.98664 17.4107 3.47938C17.1532 2.62874 16.4196 2.07466 15.5143 2.03564C14.6247 2.00442 13.2278 2.51168 12.0728 3.28428C11.8543 3.43255 11.6435 3.55742 11.6123 3.55742C11.5811 3.55742 11.4563 3.37012 11.347 3.14381C10.7617 1.99662 9.73937 0.810413 8.998 0.41241C8.51415 0.154879 7.96006 0.0534269 7.54645 0.139271ZM8.88874 1.06794C9.45063 1.34889 10.3013 2.1527 10.949 3.01894C11.1909 3.34671 11.3938 3.63546 11.3938 3.67448C11.3938 3.70569 11.2768 3.84616 11.1363 3.97883C10.9958 4.1115 10.9334 4.17393 11.0036 4.1193C11.0739 4.07248 11.1675 4.02566 11.2143 4.02566C11.2612 4.02566 11.3392 3.97103 11.3938 3.9086C11.4797 3.79934 11.5265 3.83056 11.7138 4.1193C11.9791 4.5095 12.0025 4.48609 11.7918 4.05687L11.6357 3.75252L12.3849 3.39353C13.6102 2.79263 14.3281 2.58972 15.2178 2.59753C16.9034 2.60533 17.2156 4.08809 16.0996 6.71803C15.9513 7.06141 15.8265 7.35015 15.8109 7.35796C15.8031 7.37357 15.4987 7.25651 15.1319 7.10823C14.6247 6.89752 12.9234 6.32003 12.3693 6.17175C12.3225 6.16395 12.1664 5.8752 12.0259 5.53963C11.8777 5.19625 11.7294 4.88409 11.6904 4.82947C11.6435 4.76703 11.1129 4.74362 9.90326 4.74362L8.17858 4.75143L8.01469 5.087L7.85081 5.43037L6.98457 5.42257L6.11832 5.40696L6.13393 4.93092C6.20417 3.30769 6.51633 2.02003 6.98457 1.40352C7.46841 0.76359 8.06932 0.662138 8.88874 1.06794ZM7.64791 6.47611C8.05371 6.50732 8.44391 6.54634 8.50634 6.56195C8.55723 6.57467 8.73254 6.59776 8.9224 6.62277L9.05262 6.63999C9.88765 6.72583 11.2377 6.99117 12.4474 7.31113C13.2902 7.52965 15.2958 8.2164 15.2958 8.28663C15.2958 8.33346 14.8042 9.11385 14.4296 9.66794L14.0628 10.1908L13.5945 9.12166L13.1263 8.04471L12.4708 7.86522C11.6514 7.6389 9.77839 7.25651 9.2009 7.18627C8.95897 7.16286 8.69364 7.13164 8.6156 7.11603C8.52976 7.10043 8.17858 7.06141 7.81959 7.03019L7.17967 6.97556L7.0548 7.27211C6.92213 7.58427 6.93774 7.81839 7.14845 9.05923C7.40598 10.542 8.09273 13.2031 8.27222 13.4295C8.31905 13.4841 8.84192 13.5075 9.65353 13.4997C10.3715 13.4997 10.9958 13.5153 11.0348 13.5309C11.1285 13.5855 9.34917 15.1229 8.73266 15.5209L8.52976 15.6536L8.17077 14.8498C7.39818 13.0861 6.60998 10.2688 6.36025 8.39589C6.34341 8.25559 6.31851 8.09108 6.30004 7.9691L6.30003 7.96905L6.30001 7.96892C6.29281 7.92135 6.28659 7.88026 6.28221 7.84961C6.21197 7.4438 6.15734 6.52293 6.18856 6.4683C6.23538 6.39807 6.54754 6.39807 7.64791 6.47611ZM10.2466 9.17629C10.3204 9.36797 10.4063 9.59448 10.4879 9.80976L10.4881 9.81012C10.5792 10.0505 10.6651 10.2768 10.7227 10.4249L10.91 10.9322H9.91887C9.26333 10.9322 8.93556 10.901 8.93556 10.8463C8.93556 10.6747 9.86424 8.31785 9.91106 8.38028C9.94228 8.4115 10.0906 8.77048 10.2466 9.17629ZM5.05698 11.8609C4.72141 12.6413 4.40925 13.3436 4.37023 13.4295C4.33121 13.5153 4.1205 13.9835 3.9098 14.4596L3.5274 15.3414L4.00344 15.3492C6.36025 15.3648 7.12504 15.3492 7.17967 15.2634C7.21869 15.201 7.34355 15.3648 7.50743 15.677L7.78057 16.1843L7.03139 16.5745C5.38475 17.4329 4.14392 17.5656 3.59764 16.9413C2.77822 16.0048 3.36352 13.5153 5.096 10.5576L5.50181 9.87084L5.58765 10.1596C5.66569 10.4327 5.63448 10.5342 5.05698 11.8609ZM16.8881 8.48859C16.7008 8.86318 16.693 8.9022 16.8179 8.98024C18.5816 10.0416 19.4244 10.9937 19.323 11.8131C19.2762 12.2033 19.1825 12.375 18.8001 12.7496C18.3631 13.1788 17.0286 13.7563 15.9595 13.967L15.7254 14.0138L15.2961 13.0305C15.062 12.4842 14.8279 12.0238 14.7889 12.016C14.742 12.0004 14.4533 12.3125 14.1489 12.7105C13.8368 13.1085 13.3139 13.7016 12.994 14.0294C12.674 14.3572 12.4087 14.6693 12.4087 14.724C12.4087 14.9503 12.6038 15.3405 12.7208 15.3405C12.8613 15.3483 15.6863 15.3483 16.0531 15.3405H16.3028L16.0687 14.7942C15.9439 14.4899 15.858 14.2089 15.8814 14.1699C15.9048 14.1231 16.0453 14.0918 16.1858 14.0918C16.4043 14.0918 16.7477 14.0372 17.4422 13.9046C17.7856 13.8343 18.6206 13.5222 18.7377 13.4207C18.8001 13.3583 18.8938 13.3115 18.9328 13.3115C19.0733 13.3115 19.6586 12.6949 19.8224 12.3672C20.0175 11.9848 20.0566 11.4151 19.9161 10.9234C19.6898 10.1274 18.6831 9.07389 17.3486 8.23106L17.0989 8.07498L16.8881 8.48859ZM8.65465 17.5733L8.99022 17.3626C9.17751 17.2455 9.3414 17.1753 9.37261 17.2065C9.38708 17.221 9.45818 17.3159 9.55644 17.4471C9.61718 17.5282 9.68829 17.6232 9.76281 17.7216C10.9958 19.376 12.2055 19.8287 13.0717 18.9624C13.3917 18.6424 13.7194 18.0884 13.8677 17.6279C13.9379 17.4016 14.0238 17.2143 14.0628 17.2143C14.094 17.2143 14.1096 17.2611 14.094 17.308C14.0784 17.3626 14.016 17.5811 13.9614 17.7996C13.2668 20.5544 11.0193 20.5934 8.89657 17.8855L8.65465 17.5733Z" fill="white"></path></svg>
                                                Buy on Kaytlhub
                                            </a>
                                        </div>
                                        <div className="rright">
                                            <p>5</p>
                                            <p>Items</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pack">
                                <div className="wrapper">
                                    <div className="content">
                                        <div className="rleft">
                                            <span>
                                                <img src="https://res.cloudinary.com/dpaccount/image/upload/w_150,q_40,b_rgb:171717,f_auto/prod/drops/129-AD666F63-D55B-4230-912D-D703B9253B8C/pack1" alt="" />
                                            </span>
                                        </div>
                                        <div className="middle">
                                            <h4>Premium Pack</h4>
                                            <p>18,750 Minted</p>
                                            <a href="">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.54645 0.139271C7.12504 0.225115 6.87531 0.37339 6.50072 0.747981C5.95444 1.30206 5.59546 2.09807 5.35353 3.26867C5.24428 3.79934 5.19745 4.1193 5.11161 5.15723C5.10452 5.21393 5.09905 5.27223 5.09445 5.32118L5.09445 5.3212C5.08891 5.38006 5.08465 5.4254 5.08039 5.43818C5.08039 5.46159 4.97894 5.485 4.86188 5.49281C4.44827 5.50061 3.55081 5.6723 2.84845 5.8674C1.03793 6.37466 0 7.28772 0 8.37248C0 8.87193 0.109256 9.1997 0.437023 9.66794C0.913066 10.3313 1.63103 10.9088 2.67677 11.4472C3.02795 11.6267 3.30109 11.7516 3.27767 11.7282C3.26915 11.7225 3.22336 11.6878 3.15125 11.6332L3.15118 11.6332L3.15113 11.6332C3.02521 11.5378 2.8191 11.3818 2.59092 11.2131C-0.273139 9.09825 -0.0468239 7.34235 3.17622 6.67901C4.22196 6.4605 5.12722 6.39026 5.12722 6.53074C5.13502 6.95995 5.25208 8.16177 5.33793 8.74707L5.44718 9.44943L5.03357 9.9957C2.19292 13.7572 1.62323 17.1598 3.67568 18.065C7.21088 19.6258 15.7094 12.0403 17.3014 5.90642C17.5121 5.0948 17.559 3.98664 17.4107 3.47938C17.1532 2.62874 16.4196 2.07466 15.5143 2.03564C14.6247 2.00442 13.2278 2.51168 12.0728 3.28428C11.8543 3.43255 11.6435 3.55742 11.6123 3.55742C11.5811 3.55742 11.4563 3.37012 11.347 3.14381C10.7617 1.99662 9.73937 0.810413 8.998 0.41241C8.51415 0.154879 7.96006 0.0534269 7.54645 0.139271ZM8.88874 1.06794C9.45063 1.34889 10.3013 2.1527 10.949 3.01894C11.1909 3.34671 11.3938 3.63546 11.3938 3.67448C11.3938 3.70569 11.2768 3.84616 11.1363 3.97883C10.9958 4.1115 10.9334 4.17393 11.0036 4.1193C11.0739 4.07248 11.1675 4.02566 11.2143 4.02566C11.2612 4.02566 11.3392 3.97103 11.3938 3.9086C11.4797 3.79934 11.5265 3.83056 11.7138 4.1193C11.9791 4.5095 12.0025 4.48609 11.7918 4.05687L11.6357 3.75252L12.3849 3.39353C13.6102 2.79263 14.3281 2.58972 15.2178 2.59753C16.9034 2.60533 17.2156 4.08809 16.0996 6.71803C15.9513 7.06141 15.8265 7.35015 15.8109 7.35796C15.8031 7.37357 15.4987 7.25651 15.1319 7.10823C14.6247 6.89752 12.9234 6.32003 12.3693 6.17175C12.3225 6.16395 12.1664 5.8752 12.0259 5.53963C11.8777 5.19625 11.7294 4.88409 11.6904 4.82947C11.6435 4.76703 11.1129 4.74362 9.90326 4.74362L8.17858 4.75143L8.01469 5.087L7.85081 5.43037L6.98457 5.42257L6.11832 5.40696L6.13393 4.93092C6.20417 3.30769 6.51633 2.02003 6.98457 1.40352C7.46841 0.76359 8.06932 0.662138 8.88874 1.06794ZM7.64791 6.47611C8.05371 6.50732 8.44391 6.54634 8.50634 6.56195C8.55723 6.57467 8.73254 6.59776 8.9224 6.62277L9.05262 6.63999C9.88765 6.72583 11.2377 6.99117 12.4474 7.31113C13.2902 7.52965 15.2958 8.2164 15.2958 8.28663C15.2958 8.33346 14.8042 9.11385 14.4296 9.66794L14.0628 10.1908L13.5945 9.12166L13.1263 8.04471L12.4708 7.86522C11.6514 7.6389 9.77839 7.25651 9.2009 7.18627C8.95897 7.16286 8.69364 7.13164 8.6156 7.11603C8.52976 7.10043 8.17858 7.06141 7.81959 7.03019L7.17967 6.97556L7.0548 7.27211C6.92213 7.58427 6.93774 7.81839 7.14845 9.05923C7.40598 10.542 8.09273 13.2031 8.27222 13.4295C8.31905 13.4841 8.84192 13.5075 9.65353 13.4997C10.3715 13.4997 10.9958 13.5153 11.0348 13.5309C11.1285 13.5855 9.34917 15.1229 8.73266 15.5209L8.52976 15.6536L8.17077 14.8498C7.39818 13.0861 6.60998 10.2688 6.36025 8.39589C6.34341 8.25559 6.31851 8.09108 6.30004 7.9691L6.30003 7.96905L6.30001 7.96892C6.29281 7.92135 6.28659 7.88026 6.28221 7.84961C6.21197 7.4438 6.15734 6.52293 6.18856 6.4683C6.23538 6.39807 6.54754 6.39807 7.64791 6.47611ZM10.2466 9.17629C10.3204 9.36797 10.4063 9.59448 10.4879 9.80976L10.4881 9.81012C10.5792 10.0505 10.6651 10.2768 10.7227 10.4249L10.91 10.9322H9.91887C9.26333 10.9322 8.93556 10.901 8.93556 10.8463C8.93556 10.6747 9.86424 8.31785 9.91106 8.38028C9.94228 8.4115 10.0906 8.77048 10.2466 9.17629ZM5.05698 11.8609C4.72141 12.6413 4.40925 13.3436 4.37023 13.4295C4.33121 13.5153 4.1205 13.9835 3.9098 14.4596L3.5274 15.3414L4.00344 15.3492C6.36025 15.3648 7.12504 15.3492 7.17967 15.2634C7.21869 15.201 7.34355 15.3648 7.50743 15.677L7.78057 16.1843L7.03139 16.5745C5.38475 17.4329 4.14392 17.5656 3.59764 16.9413C2.77822 16.0048 3.36352 13.5153 5.096 10.5576L5.50181 9.87084L5.58765 10.1596C5.66569 10.4327 5.63448 10.5342 5.05698 11.8609ZM16.8881 8.48859C16.7008 8.86318 16.693 8.9022 16.8179 8.98024C18.5816 10.0416 19.4244 10.9937 19.323 11.8131C19.2762 12.2033 19.1825 12.375 18.8001 12.7496C18.3631 13.1788 17.0286 13.7563 15.9595 13.967L15.7254 14.0138L15.2961 13.0305C15.062 12.4842 14.8279 12.0238 14.7889 12.016C14.742 12.0004 14.4533 12.3125 14.1489 12.7105C13.8368 13.1085 13.3139 13.7016 12.994 14.0294C12.674 14.3572 12.4087 14.6693 12.4087 14.724C12.4087 14.9503 12.6038 15.3405 12.7208 15.3405C12.8613 15.3483 15.6863 15.3483 16.0531 15.3405H16.3028L16.0687 14.7942C15.9439 14.4899 15.858 14.2089 15.8814 14.1699C15.9048 14.1231 16.0453 14.0918 16.1858 14.0918C16.4043 14.0918 16.7477 14.0372 17.4422 13.9046C17.7856 13.8343 18.6206 13.5222 18.7377 13.4207C18.8001 13.3583 18.8938 13.3115 18.9328 13.3115C19.0733 13.3115 19.6586 12.6949 19.8224 12.3672C20.0175 11.9848 20.0566 11.4151 19.9161 10.9234C19.6898 10.1274 18.6831 9.07389 17.3486 8.23106L17.0989 8.07498L16.8881 8.48859ZM8.65465 17.5733L8.99022 17.3626C9.17751 17.2455 9.3414 17.1753 9.37261 17.2065C9.38708 17.221 9.45818 17.3159 9.55644 17.4471C9.61718 17.5282 9.68829 17.6232 9.76281 17.7216C10.9958 19.376 12.2055 19.8287 13.0717 18.9624C13.3917 18.6424 13.7194 18.0884 13.8677 17.6279C13.9379 17.4016 14.0238 17.2143 14.0628 17.2143C14.094 17.2143 14.1096 17.2611 14.094 17.308C14.0784 17.3626 14.016 17.5811 13.9614 17.7996C13.2668 20.5544 11.0193 20.5934 8.89657 17.8855L8.65465 17.5733Z" fill="white"></path></svg>
                                                Buy on Kaytlhub
                                            </a>
                                        </div>
                                        <div className="rright">
                                            <p>5</p>
                                            <p>Items</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="infoCountrySupport">
                            <span>Territory Restrictions: </span>
                            Collection sale and redemption 
                            will not be available in Cuba, Iran, North Korea, Syria, 
                            Russia, Crimea and the Covered Regions of Ukraine defined 
                            as Donetsk People's Republic and the Luhansk People's Republic.
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
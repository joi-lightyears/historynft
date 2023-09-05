import "../../styles/home.scss"
export default function Support({ children }) {
    return (
        <section className="discordContatctContainer">
            <div className="divideBg">
            <div className="bgGradient"></div>
            </div>
            <div className="discordContatctWrapper">
                <div className="contentText"
                style={{
                    maxWidth: "616px"
                }}
                >
                    <h2>Need something?</h2>
                    <p>Our friendly order and technical support staff are ready and waiting. Shoot us a line or hop into Discord and get support from our amazing community of collectors.</p>
                </div>
                <div className="btnsContainer"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px"
                }}
                >
                    <a href="" className="jointBtn">
                        <div className="content">
                        
                        <div className="text">
                            Contact support
                        </div>
                        </div>
                    </a>
                    <a href="" className="jointBtn"
                    style={{
                        background: "#ffffff",
                        color: "#000000"
                    }}
                    >
                        <div className="content">
                        
                        <div className="text">
                            faq
                        </div>
                        </div>
                    </a>
                </div>
            </div>
      </section>
    )
}
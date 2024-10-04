import React, { Fragment } from "react";
import { QRCodeCanvas } from "qrcode.react";

const DownloadCV: React.FC = () => {
  const cvOnline =
    "https://www.dropbox.com/scl/fi/drx9ngeoj67u5e2eumgp4/CV.pdf?rlkey=0242ko2fdrbpmy4ki7d2ro7ug&st=x5e41aua&dl=0";
  const cvDownload = "/CV.pdf";

  return (
    <Fragment>
      <section className="container">
        <div className="timeline-modern mb-4 p-4">
          <h2 className="education-title text-center">CV ACCESS</h2>
          <div className="content text-center">
            <div className="qr-code text-center">
              <QRCodeCanvas
                value={cvOnline}
                size={256}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"H"}
                includeMargin={true}
                style={{ width: "100%", maxWidth: "200px", height: "auto" }}
              />
            </div>
            <div>
              <a href={cvDownload} download className="btn">
                Download CV
              </a>
              <a href={cvOnline} className="btn">
                View CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default DownloadCV;

import React from "react";

function NfcCard() {
  return (
    <section className="nfc-card">
      <div className="nfc-left">
        <div className="nfc-icon">)))</div>

        <div>
          <h3>NFC Tags</h3>
          <p>Program, place and track your tags.</p>
        </div>
      </div>

      <button className="manage-button">
        Manage tags
        <span>→</span>
      </button>
    </section>
  );
}

export default NfcCard;

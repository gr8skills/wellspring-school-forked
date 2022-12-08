import React from "react";

function Map() {
  return (
    <div className="col-md-12">
      <iframe
      style={{backgroundColor:'black'}}
      className="br"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.610257657395!2d7.551357401831917!3d7.215938095455306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3e4bc0fe0d9%3A0xbc5c62f566b0ab76!2s3%20Presidential%20Cl%2C%20Evergreen%20School%20400102%2C%20Enugu!5e0!3m2!1sen!2sng!4v1658490648810!5m2!1sen!2sng"
        width="100%"
        height="750"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.610257657395!2d7.510428715266626!3d6.444062295337873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3e4bc0fe0d9%3A0xbc5c62f566b0ab76!2s3%20Presidential%20Cl%2C%20Independence%20Layout%20400102%2C%20Enugu!5e0!3m2!1sen!2sng!4v1658490648810!5m2!1sen!2sng" width="100%" height="750" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  );
}

export default Map;

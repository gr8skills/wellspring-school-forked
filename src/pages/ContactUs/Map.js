import React from "react";

function Map() {
  return (
    <div className="col-md-12">
      <iframe
      style={{backgroundColor:'black'}}
      className="br mb6"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7926.242979409197!2d3.3677094!3d6.63183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9230a69b773f%3A0x717dcd4d82ccc92f!2sWellspring%20College!5e0!3m2!1sen!2sng!4v1670808546795!5m2!1sen!2sng"
        width="100%"
        height="500"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
     

     
    </div>
  );
}

export default Map;

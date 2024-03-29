import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
<figure>
<img src={photo} alt={country} />
<figcaption>
<blockquote>{destination}</blockquote>
<cite>{country}</cite>
<cite>{distance}</cite>
</figcaption>
</figure>
);
export default Travel;
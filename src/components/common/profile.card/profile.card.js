import { Button, Typography } from "@mui/material";
import React from "react";
import "./profile.card.scss";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";

const ProductCard = (props) => {
  const { name, role, image } = props;

  return (
    <div data-aos="fade-down" id="product-card" className="card-wrapper paper-root">
      <img
        className="image"
        src={`${process.env.PUBLIC_URL}/assets/images/${
          image ? image : "kk.jpg"
        }`}
        alt="product-img"
      />

      <div className="d-flex flex-column align-items-center justify-content-center card-content">
        <Typography variant="body2" className=" pb-1 txt-gray">
          {name}
        </Typography>
        <Typography variant="body1" className="fw-lighter pb-1">
          {role}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          className="mt-1"
          color="secondary"
          //   onClick={handleClickOpen}
        >
          Connect Me
          <SpeakerNotesIcon sx={{ fontSize: 20, marginLeft: 1 }} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

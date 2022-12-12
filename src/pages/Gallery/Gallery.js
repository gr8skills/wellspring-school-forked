import Banner from "../../assets/gallery-banner.png";
import Home from "../../assets/home.png";
import React, { useEffect, useState, useCallback } from "react";

import Index3 from "../../assets/girl.png";
import Index1 from "../../assets/index2.png";
import Index0 from "../../assets/building2.png";
import Index2 from "../../assets/vision-banner.png";
import Index4 from "../../assets/piano-banner.png";
import Index5 from "../../assets/sports-banner.png";
import Index6 from "../../assets/song-banner.png";
import Index7 from "../../assets/team.png";
import Index8 from "../../assets/co-corricular.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { default as Galery } from "react-photo-gallery";
import { default as Carusal, Modal, ModalGateway } from "react-images";
import "react-image-lightbox/style.css";

import "./_gallery.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  var photos = [
    {
      src: Index0,
      width: 1,
      height: 1,
      title: "sample title",
      index: 0,
    },
    {
      src: Index1,
      width: 1,
      height: 1,
      title: "sample title 2",
      index: 1,
    },
    {
      src: Index2,
      width: 1,
      height: 1,
      title: "sample title 3",
      index: 2,
    },
    {
      src: Index3,
      width: 1,
      height: 1,
      title: "sample title 4",
      index: 3,
    },{
      src: Index4,
      width: 1,
      height: 1,
      title: "sample title 4",
      index: 4,
    },{
      src: Index5,
      width: 1,
      height: 1,
      title: "sample title 4",
      index: 5,
    },{
      src: Index6,
      width: 1,
      height: 1,
      title: "sample title 4",
      index: 6,
    },{
      src: Index7,
      width: 1,
      height: 1,
      title: "sample title 4",
      index: 7,
    },{
      src: Index8,
      width: 1,
      height: 1,
      title: "sample title 4",
      index: 8,
    },
  ];

  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">Media Gallery</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <Link to={"/"}>
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </Link>
        <p>Media Gallery</p>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>

        <div
          className="page-body col-md-10 m-margin"
          style={{ textAlign: "center" }}
        >
          <Heading size="xl" mb="50px" mt="30px">
            Media Gallery
          </Heading>
          <div className="col-md-12 flexy mt5">
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-4">
                <div className="col-md-11 col-12">
                  <img
                    className="col-md-12 br gallery-images "
                    src={Index0}
                    alt="Scholar"
                    onClick={() => {
                      openLightbox(0);
                    }}
                  />
                  <img
                    className="col-md-12 br gallery-images mt1"
                    src={Index1}
                    alt="Scholar"
                    onClick={() => {
                      openLightbox(1);
                    }}
                  />
                  <img
                    className="col-md-12 br gallery-images mt1"
                    src={Index2}
                    alt="Scholar"
                    onClick={() => {
                      openLightbox(2);
                    }}
                  />
                </div>
              </div>{" "}
              <div className="col-md-4">
                <div className="col-md-11 col-12">
                  <img
                    className="col-md-12 br gallery-images "
                    src={Index3}
                    onClick={() => {
                      openLightbox(3);
                    }}
                    alt="Scholar"
                  />
                </div>
                <div className="col-md-11 col-12">
                  <img
                    className="col-md-12 br gallery-images mt1"
                    src={Index4}
                    onClick={() => {
                      openLightbox(4);
                    }}
                    alt="Scholar"
                  />
                </div>
                <div className="col-md-11 col-12">
                  <img
                    className="col-md-12 br gallery-images mt1"
                    src={Index5}
                    onClick={() => {
                      openLightbox(5);
                    }}
                    alt="Scholar"
                  />
                </div>
              </div>{" "}
              <div className="col-md-4">
                <div className="col-md-11 col-12">
                  <img
                    className="col-md-12 br gallery-images"
                    src={Index6}
                    onClick={() => {
                      openLightbox(6);
                    }}
                    alt="Scholar"
                  />
                </div>
                <div className="col-md-11 col-12">
                  <img
                    className="col-md-12 br gallery-images mt1"
                    src={Index7}
                    onClick={() => {
                      openLightbox(7);
                    }}
                    alt="Scholar"
                  />
                </div>
                <div className="col-md-11 col-12">
                  <img
                    className="col-md-12 br gallery-images mt1"
                    src={Index8}
                    onClick={() => {
                      openLightbox(8);
                    }}
                    alt="Scholar"
                  />
                </div>
              </div>{" "}
              {/* <Galery direction='row' photos={photos} onClick={openLightbox}></Galery> */}
            </div>
          </div>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carusal
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    source: x.src,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
      {/* <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10">
          <div className="col-md-4">
            <div className="col-md-11 col-12">
              <img
                className="col-md-12 br"
                src={Building}
                onClick={() => {
                  openLightbox(3);
                }}
                alt="Scholar"
              />
            </div>
          </div>
        </div>
      </div> */}
      <StayConnected />
    </>
  );
};

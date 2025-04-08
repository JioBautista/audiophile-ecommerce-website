import React from "react";
import Container from "../../components/Container";

function ImageGallery({ data }) {
  const srcs = ["./assets", "/assets"];
  const [current, replaced] = srcs;
  const imgClassesMobile = { className: "rounded-lg md:hidden" };

  return (
    <Container
      styles={
        "px-5  space-y-5 md:grid-cols-auto md:grid  md:space-y-0 md:gap-3 lg:grid-rows-6 lg:grid-cols-5 lg:gap-0 lg:gap-x-5"
      }
    >
      {data?.map((element) => (
        <React.Fragment key={element.id}>
          {/* FIRST IMAGE */}
          <img
            src={element.properties.gallery.first.mobile.replace(
              current,
              replaced,
            )}
            {...imgClassesMobile}
          />
          <img
            src={element.properties.gallery.first.tablet.replace(
              current,
              replaced,
            )}
            className="hidden rounded-lg md:block lg:hidden"
          />

          <img
            src={element.properties.gallery.first.desktop.replace(
              current,
              replaced,
            )}
            className="col-start-1  col-end-3 row-start-1 row-end-4 hidden rounded-lg lg:block"
          />

          {/* SECOND IMAGE */}
          <img
            src={element.properties.gallery.second.mobile.replace(
              current,
              replaced,
            )}
            {...imgClassesMobile}
          />

          <img
            src={element.properties.gallery.second.tablet.replace(
              current,
              replaced,
            )}
            className="hidden rounded-lg md:block md:self-end lg:hidden"
          />

          <img
            src={element.properties.gallery.second.desktop.replace(
              current,
              replaced,
            )}
            className="col-start-1 col-end-3  row-start-4 row-end-7 hidden rounded-lg md:self-end lg:block"
          />
          {/* THIRD IMAGE */}
          <img
            src={element.properties.gallery.third.mobile.replace(
              current,
              replaced,
            )}
            {...imgClassesMobile}
          />

          <img
            src={element.properties.gallery.third.tablet.replace(
              current,
              replaced,
            )}
            className="col-start-2 col-end-4 row-start-1 row-end-3 hidden max-w-[400px] rounded-lg md:block lg:hidden"
          />

          <img
            src={element.properties.gallery.third.desktop.replace(
              current,
              replaced,
            )}
            className="col-start-3 col-end-6 row-start-1 row-end-7 hidden rounded-lg lg:block"
          />
        </React.Fragment>
      ))}
    </Container>
  );
}

export default ImageGallery;

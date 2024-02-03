import { useRef } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

import bg1 from "assets/images/slider/Cooling.jpg";
import bg2 from "assets/images/slider/ignition.jpg";
import bg3 from "assets/images/slider/airbag.jpg";

function Slider() {
  SwiperCore.use([Autoplay, Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Card sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden" }}>
      <Swiper
        onInit={({ params, navigation }) => {
          const { navigation: nav } = params;

          nav.prevEl = navigationPrevRef.current;
          nav.nextEl = navigationNextRef.current;
          navigation.init();
          navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        loop
        style={{ height: "100%" }}
      >
        <ArgonBox
          display="flex"
          alignItems="center"
          position="absolute"
          top={12}
          right={12}
          zIndex={5}
        >
          <ArgonBox
            width="3.25rem"
            height="3.25rem"
            color="white"
            p={2}
            sx={{ cursor: "pointer" }}
            ref={navigationPrevRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </ArgonBox>
          <ArgonBox
            width="3.25rem"
            height="3.25rem"
            color="white"
            p={2}
            sx={{ cursor: "pointer" }}
            ref={navigationNextRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </ArgonBox>
        </ArgonBox>
        <SwiperSlide>
          <ArgonBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <ArgonBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">
              <ArgonTypography variant="h5" color="white" mb={0.5}>
                Fault in Cooling System
              </ArgonTypography>
              <ArgonTypography variant="body2" color="white">
                Try to immediate Maintained Cooling System, as your car didn&apos;t ready to Go anywhere else.
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </SwiperSlide>
        <SwiperSlide>
          <ArgonBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <ArgonBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">              
              <ArgonTypography variant="h5" color="white" mb={0.5}>
                Fault in Ignition System
              </ArgonTypography>
              <ArgonTypography variant="body2" color="white">
                Trace Ignition wiring while checking for grounds, shorts, and open circuits and resolve issue.
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </SwiperSlide>
        <SwiperSlide>
          <ArgonBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg3})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <ArgonBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">             
              <ArgonTypography variant="h5" color="white" mb={0.5}>
                Fault in Air Bag System
              </ArgonTypography>
              <ArgonTypography variant="body2" color="white">
                Air Bag Suspension would predict 30% of Fault but at timely it increases, so you need to 
                replaced it for future prospectus and problems. 
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </SwiperSlide>
      </Swiper>
    </Card>
  );
}

export default Slider;

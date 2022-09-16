import "./App.css";
import * as f from "./util/fcm";

import React, { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import MainPage from "./components/main/page";
import DetailPage from "./components/detail/page";
import NoticePage from "./components/notice/page";

import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);
  f.getTokenFunc(setTokenFound);

  f.onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  function goDetail() {
    navigate(`notice/${notification.body}`);
  }

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          style={{
            backgroundColor: "#F8E3E4",
          }}
          closeButton
        >
          <strong className="mr-auto" style={{ color: "#7A282C" }}>
            새로운 교통사고 영상이 업로드 되었습니다.
          </strong>
        </Modal.Header>
        <Modal.Footer style={{ backgroundColor: "#CB444A" }}>
          <Button
            variant="danger"
            onClick={() => setShow(false)}
            style={{
              backgroundColor: "#7A282C",
            }}
          >
            닫기
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setShow(false);
              goDetail();
            }}
            style={{
              backgroundColor: "#7A282C",
            }}
          >
            영상 확인
          </Button>
        </Modal.Footer>
      </Modal>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="detail/:objID" element={<DetailPage />} />
        <Route path="notice/:videoUrl" element={<NoticePage />} />
      </Routes>
    </>
  );
}

export default App;

import * as S from "./style";

import React from "react";
import { Accordion, useAccordionButton } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai";

function CustomToggle({ children, eventKey, callback }) {
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  return (
    <S.ToggleBox type="button" onClick={decoratedOnClick}>
      <S.ToggleText>{children}</S.ToggleText>
      <AiOutlineDown value={{ color: "#EEF1F9" }} />
    </S.ToggleBox>
  );
}

function SideNav(props) {
  return (
    <S.SideContainer>
      <S.InnerContainer>
        <Accordion flush alwaysOpen>
          <CustomToggle eventKey="0">수도권</CustomToggle>
          <Accordion.Collapse eventKey="0">
            <ul style={{ listStyle: "none" }}>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>수도권 고속도로1</S.InnerToggleText>
                </S.ToggleBox>
              </li>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>수도권 고속도로2</S.InnerToggleText>
                </S.ToggleBox>
              </li>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>수도권 고속도로3</S.InnerToggleText>
                </S.ToggleBox>
              </li>
            </ul>
          </Accordion.Collapse>

          <CustomToggle eventKey="1">강원권</CustomToggle>
          <Accordion.Collapse eventKey="1">
            <ul style={{ listStyle: "none" }}>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>강원권 고속도로1</S.InnerToggleText>
                </S.ToggleBox>
              </li>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>강원권 고속도로2</S.InnerToggleText>
                </S.ToggleBox>
              </li>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>강원권 고속도로3</S.InnerToggleText>
                </S.ToggleBox>
              </li>
            </ul>
          </Accordion.Collapse>

          <CustomToggle eventKey="2">충청권</CustomToggle>
          <Accordion.Collapse eventKey="2">
            <ul style={{ listStyle: "none" }}>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>충청권 고속도로1</S.InnerToggleText>
                </S.ToggleBox>
              </li>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>충청권 고속도로2</S.InnerToggleText>
                </S.ToggleBox>
              </li>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>충청권 고속도로3</S.InnerToggleText>
                </S.ToggleBox>
              </li>
            </ul>
          </Accordion.Collapse>
          <CustomToggle eventKey="3">전라권</CustomToggle>
          <Accordion.Collapse eventKey="3">
            <ul style={{ listStyle: "none" }}>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>전라권 고속도로1</S.InnerToggleText>
                </S.ToggleBox>
              </li>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>전라권 고속도로2</S.InnerToggleText>
                </S.ToggleBox>
              </li>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>전라권 고속도로3</S.InnerToggleText>
                </S.ToggleBox>
              </li>
            </ul>
          </Accordion.Collapse>
          <CustomToggle eventKey="4">경상권</CustomToggle>
          <Accordion.Collapse eventKey="4">
            <ul style={{ listStyle: "none" }}>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>경상권 고속도로1</S.InnerToggleText>
                </S.ToggleBox>
              </li>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>경상권 고속도로2</S.InnerToggleText>
                </S.ToggleBox>
              </li>
              <li>
                <S.ToggleBox>
                  <S.InnerToggleText>경상권 고속도로3</S.InnerToggleText>
                </S.ToggleBox>
              </li>
            </ul>
          </Accordion.Collapse>
        </Accordion>
      </S.InnerContainer>
    </S.SideContainer>
  );
}

export default SideNav;

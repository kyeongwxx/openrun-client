import { useQuery } from "@apollo/client";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FETCH_BOARD } from "./queries";
// import "./styles.css";
import styled from "@emotion/styled";
import MediaQueryUltra from "../mediaQuery/mediaQueryStandardUltra";
import MediaQueryPc from "../mediaQuery/mediaQueryStandardPc";
import MediaQueryMobile from "../mediaQuery/mediaQueryStandardMobile";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding-top: 40px;
`;

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 100,
  strokeWidth: 6,
};

const renderTime = (dimension: any, time: any) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time: any) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: any) =>
  ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: any) =>
  Math.abs((time % daySeconds) / hourSeconds - 9) | 0;
const getTimeDays = (time: any) => (time / daySeconds) | 0;

export default function Timer() {
  // mediaQuery
  const isPc = MediaQueryPc();
  const isMobile = MediaQueryMobile();
  const isUltra = MediaQueryUltra();

  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  const startTime = Date.now() / 1000;
  const endTime = moment(data?.fetchBoard?.dueDate).unix();

  const remainingTime = endTime - startTime;
  const days = remainingTime / daySeconds;
  const daysDuration = days * daySeconds;

  return (
    <div className="App">
      {data?.fetchBoard?.dueDate && (
        <Wrapper>
          {/* days */}
          {isPc && (
            <CountdownCircleTimer
              {...timerProps}
              colors="#7E2E84"
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
          )}
          {isMobile && (
            <CountdownCircleTimer
              {...timerProps}
              colors="#7E2E84"
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
          )}
          {isUltra && (
            <CountdownCircleTimer
              size={65}
              strokeWidth={4}
              colors="#7E2E84"
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
          )}

          {/* hours */}
          {isPc && (
            <CountdownCircleTimer
              {...timerProps}
              colors="#D14081"
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
          )}
          {isMobile && (
            <CountdownCircleTimer
              {...timerProps}
              colors="#D14081"
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
          )}
          {isUltra && (
            <CountdownCircleTimer
              size={65}
              strokeWidth={4}
              colors="#D14081"
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
          )}

          {/* minutes */}
          {isPc && (
            <CountdownCircleTimer
              {...timerProps}
              colors="#EF798A"
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime(
                    "minutes",
                    getTimeMinutes(hourSeconds - elapsedTime)
                  )}
                </span>
              )}
            </CountdownCircleTimer>
          )}
          {isMobile && (
            <CountdownCircleTimer
              {...timerProps}
              colors="#EF798A"
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime(
                    "minutes",
                    getTimeMinutes(hourSeconds - elapsedTime)
                  )}
                </span>
              )}
            </CountdownCircleTimer>
          )}
          {isUltra && (
            <CountdownCircleTimer
              size={65}
              strokeWidth={4}
              colors="#EF798A"
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime(
                    "minutes",
                    getTimeMinutes(hourSeconds - elapsedTime)
                  )}
                </span>
              )}
            </CountdownCircleTimer>
          )}

          {/* seconds */}
          {isPc && (
            <CountdownCircleTimer
              {...timerProps}
              colors="#218380"
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > 0,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("seconds", getTimeSeconds(elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
          )}
          {isMobile && (
            <CountdownCircleTimer
              {...timerProps}
              colors="#218380"
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > 0,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("seconds", getTimeSeconds(elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
          )}
          {isUltra && (
            <CountdownCircleTimer
              size={70}
              strokeWidth={4}
              colors="#218380"
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > 0,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("seconds", getTimeSeconds(elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
          )}
        </Wrapper>
      )}
    </div>
  );
}

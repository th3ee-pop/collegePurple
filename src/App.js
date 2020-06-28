import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import random from 'lodash/random';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';

function App() {

  const [currentDate, setCurrentDate] = useState('06月28日');
  const [currentTime, setCurrentTime] = useState('15:35:35');
  const [name, setName] = useState('')

  const familyName = ['陈', '杜', '赵', '李', '容', '薛', '高', '袁', '张', '谢'];
  const firstName = ['思', '睿', '萌', '尧', '扬', '伊', '晗', '旭', '一', '飞', '宗', '琦', '添', '枭', '博', '子', '健', '文']

  const getName = useCallback(
    () => {
      return `${familyName[random(0, 9)]}${firstName[random(0, 17)]}${firstName[random(0, 17)]}`
    },
    [],
  )

  const x = new FileReader();

  useEffect(() => {
    setName(getName());
    const timeCounter = setInterval(() => {
      const DateNow = moment().format('MM月DD日');
      const TimeNow = moment().format('HH:mm:ss');
      setCurrentDate(DateNow);
      setCurrentTime(TimeNow);
    }, 1000);
    return () => {
      clearInterval(timeCounter)
    };
  }, [getName]);

  useEffect(() => {
    document.getElementById('imageUploader').onchange = function () {
      console.log(this.files[0]);
      x.readAsDataURL(this.files[0]);
    }
    x.onloadend = function () {
      document.getElementById('avatar').src = this.result;
    }
  }, []);

  return (
    <div className="App">
      <img className="bgImg" src={require('./img/purple_bg.png')} />
      <div className="datetimeContainer">
        <div className="dateContainer">{currentDate}</div>
        <div className="timeContainer">{currentTime}</div>
      </div>
      <div className="avatarContainer">
        <form>
          <input
            id="imageUploader"
            type="file"
            name="image" />
        </form>
        <img id="avatar" src="" />

      </div>
      <div className="infoContainer">
        <div className="infoName">{`3116033005 ${name}`}</div>
        <div className="infoGrade">研究生</div>
        <div className="infoClass">计算机科学与技术/6046</div>
      </div>
      <div className="homeBottom">
        <img className="homeBottomImg" src={require('./img/purple_bottom.png')} />
      </div>
      <div className="startTime">
        2020-05-23 16:24
      </div>
      <div className="endTime">
        2020-07-08 13:24
      </div>
    </div>
  );
}

export default App;

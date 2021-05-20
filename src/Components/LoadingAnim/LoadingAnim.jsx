import logo from '../../logo.png';
import { useSelector } from 'react-redux';
import { STATUS } from '../../Features/loadingAnim';
import './loadingAnim.css';
import { useEffect, useState } from 'react';

const LoadingAnim = () => {
  const status = useSelector(state => state.loadingAnim.status);
  const [onOff, setOnOff] = useState(false);
  const [showAnim, setShowAnim] = useState('not-loading');

  useEffect(() => {
    if (onOff && status === STATUS.LOADING) {
      setShowAnim('loading');
    } else {
      setShowAnim('not-loading');
    } // eslint-disable-next-line
  }, [onOff]);

  useEffect(() => {
    if (!onOff && status === STATUS.LOADING) {
      setTimeout(() => {
        setOnOff(true);
      }, 1000)
    }

    if (onOff && status === STATUS.NOTLOADING) {
      setTimeout(() => {
        setOnOff(false);
      }, 2000)
    } // eslint-disable-next-line
  }, [status]); 


  return (
    <div className={showAnim}>
      <img src={logo} alt="" />
    </div>
  );
}

export default LoadingAnim;
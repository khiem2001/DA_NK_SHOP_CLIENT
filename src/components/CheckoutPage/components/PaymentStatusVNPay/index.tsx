import Image from '@/components/Image';
import { getDataPayment } from '@/utils/payment';
import { useEffect, useState } from 'react';
import { InnerContainer1, InnerContainer2 } from './styled';
import { useRouter } from 'next/router';
import useCartStore from '@/store/useCartStore';
import Head from 'next/head';

const backgroundSuccess = '/images/checkout/background-5.svg';
const backgroundError = '/images/checkout/background-6.svg';
const statusSuccess = '/images/checkout/status-success.svg';
const statusError = '/images/checkout/status-error.svg';

const PaymentStatus = () => {
  const [status, setStatus] = useState<any>(null);
  const [errorCode, setErrorCode] = useState<any>(null);
  const [orderError, setOrderError] = useState<any>(null);
  const router = useRouter();
  const clearCart = useCartStore((state: any) => state.clear);

  const handleBack = () => {
    router.push('/');
  };

  useEffect(() => {
    const isSucces =
      window.location?.search.includes('&vnp_ResponseCode=00&') &&
      window.location?.search.includes('&vnp_TransactionStatus=00&');
    if (isSucces) {
      setStatus('success');
      // Clear cart items
      clearCart();
    } else {
      const errCode = getDataPayment('vnp_ResponseCode', window.location?.search);
      const orderCode = getDataPayment('vnp_TxnRef', window.location?.search);
      setErrorCode(errCode);
      setOrderError(orderCode);
      setStatus('fail');
    }
  }, []);

  return (
    <div className="bg-slate-500">
      {status === 'success' && (
        <InnerContainer1>
          <Image className="icon" src={statusSuccess} alt="success" width={100} height={100} />
          <Head>
            <title>THANH TOÁN THÀNH CÔNG!</title>
          </Head>
          <p className="status">THANH TOÁN THÀNH CÔNG!</p>
          <p className="first">Cảm ơn bạn đã mua sản phẩm tại NK SHOP.</p>
          <p className="second">
            Thông tin đơn hàng đã được gửi tới Tài khoản NK SHOP của bạn, vui lòng truy cập tại{' '}
            <span style={{ cursor: 'pointer' }}>ĐÂY</span>
          </p>
          <p className="third">Chúc bạn có những phút giây thư giãn thưởng thức chương trình.</p>
        </InnerContainer1>
      )}
      {status === 'fail' && (
        <InnerContainer2>
          <Image className="icon" src={statusError} alt="success" width={100} height={100} />
          <Head>
            <title>THANH TOÁN KHÔNG THÀNH CÔNG!</title>
          </Head>
          <p className="status">THANH TOÁN KHÔNG THÀNH CÔNG!</p>
          <p className="first">{`Thanh toán dịch vụ thất bại (Mã lỗi ${errorCode || ''})`}</p>
          <p className="second">{`Mã giao dịch: ${orderError}`}</p>
          <p className="third">Chúng tôi rất tiếc vì giao dịch chưa hoàn thành.</p>
          <p className="fourth">Vui lòng thử lại hoặc liên hệ với chúng tôi theo số Hotline: 19001001</p>
          <button onClick={handleBack}>QUAY LẠI</button>
        </InnerContainer2>
      )}
    </div>
  );
};

export default PaymentStatus;

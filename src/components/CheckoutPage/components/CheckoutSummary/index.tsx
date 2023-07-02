import React, { useState } from 'react';

import { formatPrice } from '@/utils/string';
import { PaymentMethod, PaymentProvider, PaymentType } from '@/graphql/generated';
import AtmCardIcon from '@/components/Icon/atm_card';
import RadioButton from '@/components/Radio';
import CreaditCardIcon from '@/components/Icon/credit_card';
import PrimaryButton from '@/components/Button/PrimaryButton';
import { FaCreditCard, FaMoneyBill } from 'react-icons/fa';
import useClearCart from '../../services/hooks/useClearCart';
import Notification from '@/components/Notification';

type Props = {
  onCheckout: (
    paymentMethod: PaymentMethod,
    shippingAddress: string,
    paymentProvider: PaymentProvider,
    paymentType: PaymentType
  ) => void;
  selectedItems: any[];
  isLoading: boolean;
  address: string;
};

const CheckoutSummary = (props: Props) => {
  const { handleClearCart } = useClearCart();
  const { selectedItems, onCheckout, isLoading, address } = props;
  const total = (selectedItems || [])?.reduce((total, item) => total + (item?.price || 0) * item.quantity, 0);
  const [shippingAddress, setShippingAddress] = useState(address);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.Offline);
  const [paymentProvider, setPaymentProvider] = useState<PaymentProvider>(PaymentProvider.Zalopay);
  const [paymentType, setPaymentType] = useState<PaymentType>(PaymentType.Cc);
  const handleChange = (e: any) => {
    setShippingAddress(e.target.value);
  };

  const handleCheckout = () => {
    if (shippingAddress === '') {
      Notification.Info('Vui lòng điền địa chỉ nhận hàng!');
    } else {
      handleClearCart();
      onCheckout(paymentMethod, shippingAddress, paymentProvider, paymentType);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[34px] mb-[30px] border-b-[0.5px] border-[#000000]">
        <p className="mb-[2px] text-xl font-bold special-font">THÔNG TIN ĐƠN HÀNG</p>
      </div>
      <div className="flex flex-col mb-7">
        <div className="uppercase mb-1">Địa chỉ nhận hàng</div>
        <div className="text-red averta-semibold text-[md] text-[#e94d39] ">
          <input type="text" name="address" value={shippingAddress} onChange={handleChange} className="p-2 w-11/12" />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="uppercase">Tổng thanh toán</div>
        <div className="text-red averta-semibold text-[md] text-[#DC0000]">
          {formatPrice(total)}
          <span className="text-xs underline">đ</span>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex uppercase border-b-2 special-font font-[700] text-[#4D4D4D]">Xác nhận thanh toán</div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex justify-between ">
          <div className="flex items-center gap-2">
            <div>
              <FaCreditCard size={24} />
            </div>
            <div className="averta-semibold">Thanh toán khi nhận hàng</div>
          </div>
          <div className="">
            <RadioButton
              name="PaymentMethod"
              defaultChecked={true}
              onChange={() => {
                setPaymentMethod(PaymentMethod.Offline);
              }}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 ">
            <div>
              <FaMoneyBill size={24} />
            </div>
            <div className="averta-semibold">Thanh toán Online</div>
          </div>
          <div className="">
            <RadioButton name="PaymentMethod" onChange={() => setPaymentMethod(PaymentMethod.Online)} />
          </div>
        </div>
      </div>
      {paymentMethod === PaymentMethod.Online && (
        <div className="flex flex-col mt-5 mr-10">
          <div className="uppercase mb-2">Hình thức thanh toán</div>
          <div className="flex flex-col ">
            <div className="flex items-center gap-2 mb-2 justify-between">
              <div className="flex">
                <div>
                  <img src="/images/zalopay_logo.jpg" alt="ZaloPay" className="h-6 w-6 mr-2" />
                </div>
                <div className="averta-semibold">ZaloPay</div>
              </div>

              <div className="">
                <RadioButton
                  name="PaymentProvider"
                  defaultChecked={true}
                  onChange={() => {
                    setPaymentProvider(PaymentProvider.Zalopay);
                  }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2 justify-between">
              <div className="flex ">
                <div>
                  <img src="/images/vnpay_logo.png" alt="VNPay" className="h-6 w-6 mr-2" />
                </div>
                <div className="averta-semibold">VNPay</div>
              </div>

              <div className="">
                <RadioButton
                  name="PaymentProvider"
                  onChange={() => {
                    setPaymentProvider(PaymentProvider.Vnpay);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {paymentMethod === PaymentMethod.Online && paymentProvider && (
        <div className="flex flex-col mt-4 mr-20">
          <div className="uppercase mb-2">Phương thức thanh toán</div>
          <div className="flex flex-col ">
            <div className="flex items-center gap-2 mb-2 justify-between">
              <div className="flex">
                <div>
                  <AtmCardIcon />
                </div>
                <div className="ml-2 averta-semibold">ATM</div>
              </div>

              <div className="">
                <RadioButton
                  name="PaymentType"
                  onChange={() => {
                    setPaymentType(PaymentType.Atm);
                  }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between">
              <div className="flex">
                <div>
                  <CreaditCardIcon />
                </div>
                <div className="ml-2 averta-semibold">Credit Card (CC)</div>
              </div>

              <div className="">
                <RadioButton
                  name="PaymentType"
                  defaultChecked={true}
                  onChange={() => {
                    setPaymentType(PaymentType.Cc);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <PrimaryButton
        className="w-full mt-4"
        onClick={handleCheckout}
        disabled={isLoading || selectedItems?.length == 0}
      >
        {isLoading ? 'Đang xử lý...' : 'Thanh toán'}
      </PrimaryButton>
    </div>
  );
};

export default CheckoutSummary;

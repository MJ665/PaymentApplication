'use client';  // Add this directive at the top if it's a component

import { useRecoilValue } from 'recoil';
import { balanceAtom } from '../atoms/balance';

export const useBalance = () => {
  const value = useRecoilValue(balanceAtom);
  return value;
};

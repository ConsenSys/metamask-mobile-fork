import React from 'react';
import TransactionReviewEIP1559 from './';
import configureMockStore from 'redux-mock-store';
import renderWithProvider from '../../../..//util/test/renderWithProvider';

const mockStore = configureMockStore();
const initialState = {
  engine: {
    backgroundState: {
      CurrencyRateController: {
        currentCurrency: 'usd',
        conversionRate: 0.1,
      },
      NetworkController: {
        providerConfig: {
          ticker: 'ETH',
          chainId: '1',
        },
      },
    },
  },
};
const store = mockStore(initialState);

describe('TransactionReviewEIP1559', () => {
  it('should match snapshot', async () => {
    const container = renderWithProvider(<TransactionReviewEIP1559 />, {
      state: initialState,
    });
    expect(container).toMatchSnapshot();
  });
});

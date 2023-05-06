import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { usePaginate } from "../Hooks/usePaginate";
import { KEY } from "../Types/consts";
import {
  ICurrency,
  LocalStorageCoin,
  PortfolioContent,
  PortfolioContextType,
} from "../Types/types";

type ContextProvider = ReturnType<typeof Context.Provider>;

interface PortfolioContextProps {
  children: ReactNode;
}

export const Context = createContext<PortfolioContextType | undefined>(
  undefined
);

export const usePortfolioContext = (): PortfolioContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useMeContext must be used within a MeContextProvider");
  }
  return context;
};

export const PortfolioContextProvider = ({
  children,
}: PortfolioContextProps): ContextProvider => {
  const [portfolioTotalPrice, setPortfolioTotalPrice] = useState<number>(0);

  const initialState = useCallback(() => {
    const localStorageObject = localStorage.getItem(KEY);
    if (localStorageObject === null) {
      const emptyPortfolio: PortfolioContent = {
        coins: [],
        portfolioPrice: 0,
      };
      return emptyPortfolio;
    } else {
      const portfolio: PortfolioContent = JSON.parse(localStorageObject);
      return portfolio;
    }
  }, []);

  let [localStorageContent, setLocalStorageContent] =
    useState<PortfolioContent>(initialState());
  const { currentList } = usePaginate();

  const saveLocalStorage = useCallback(
    (coinList: LocalStorageCoin[], price: number) => {
      const currentLSValue: PortfolioContent = {
        coins: coinList,
        portfolioPrice: price,
      };
      localStorage.setItem(KEY, JSON.stringify(currentLSValue));
      setLocalStorageContent(currentLSValue);
      setPortfolioTotalPrice(price);
    },
    []
  );

  const onDelete = useCallback(({ coin }: LocalStorageCoin) => {
    const newPortfolioCoins = localStorageContent.coins.filter(
      (item) => item.coin?.id !== coin?.id
    );
    const newPortfolioTotalPrice = newPortfolioCoins.reduce((prev, current) => {
      return prev + current.totalPrice;
    }, 0);
    saveLocalStorage(newPortfolioCoins, newPortfolioTotalPrice);
  }, []);

  const onUpdate = useCallback((item: LocalStorageCoin) => {
    let existCoins = localStorageContent?.coins;
    const newPortfolioCoins = existCoins.map((currency) => {
      if (currency.coin?.id === item.coin?.id) {
        const result: LocalStorageCoin = {
          coin: currency.coin,
          value: currency.value + item.value,
          totalPrice: currency.totalPrice + item.totalPrice,
        };
        return result;
      } else {
        return currency;
      }
    });
    const newPortfolioTotalPrice: number = newPortfolioCoins.reduce(
      (sum, elem) => {
        return sum + elem.totalPrice;
      },
      0
    );
    saveLocalStorage(newPortfolioCoins, newPortfolioTotalPrice);
  }, []);

  const onAdd = useCallback((item: LocalStorageCoin) => {
    let existCoins = localStorageContent?.coins;
    existCoins.push(item);
    const newPortfolioTotalPrice: number = existCoins.reduce((sum, elem) => {
      return sum + elem.totalPrice;
    }, 0);

    saveLocalStorage(existCoins, newPortfolioTotalPrice);
  }, []);

  const handlePortfolioContext = useCallback(
    (coin: ICurrency, value: number) => {
      const isExist = !!localStorageContent.coins.find(
        (item) => item.coin?.id === coin.id
      );

      const currentCoin: LocalStorageCoin = {
        coin: coin,
        value: value,
        totalPrice: value * coin.priceUsd || 0,
      };

      if (!isExist) {
        onAdd(currentCoin);
      } else {
        onUpdate(currentCoin);
      }
    },
    []
  );

  const refreshPrice = useMemo(() => {
    const idList = localStorageContent.coins.map((item) => {
      return item.coin?.id;
    });
    const filteredCoins = currentList.filter((element) =>
      idList.includes(element.id)
    );
    const priceList = filteredCoins.map((item) => {
      return Number(item.priceUsd);
    });
    const refreshTotalSum = priceList.reduce((prev, current) => {
      return prev + current;
    }, 0);
    return refreshTotalSum;
  }, [localStorageContent, currentList]);

  const getPercent = (portfolio: number, current: number) => {
    if (portfolio >= current) {
      return 100 - (current / portfolio) * 100;
    } else {
      return 100 - (portfolio / current) * 100;
    }
  };

  const portfolioInfo = useMemo(() => {
    const difference = refreshPrice - localStorageContent.portfolioPrice;
    const info = {
      difference: Math.abs(difference),
      percent: getPercent(localStorageContent.portfolioPrice, refreshPrice),
      sign: refreshPrice >= localStorageContent.portfolioPrice ? "+" : "-",
    };
    return info;
  }, [refreshPrice, localStorageContent]);

  const value: PortfolioContextType = {
    localStorageContent,
    deleteHandler: onDelete,
    setLocalStorageContent,
    handlePortfolioContext,
    portfolioTotalPrice,
    portfolioInfo,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

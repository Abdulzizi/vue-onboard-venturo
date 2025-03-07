import { useLayoutStore } from "./pinia/layout";
import { useAuthStore } from "./pinia/auth";
import { useUserStore } from "./pinia/user";
import { useCustomerStore } from "./pinia/customer";
import { useProductCategoryStore } from "./pinia/product-category";
import { useSaleStore } from "./pinia/sale";
import { useProductStore } from "./pinia/product";
import { useReportStore } from "./pinia/report";
import { createPinia } from "pinia";

const pinia = createPinia();
export default pinia;

export {
  useLayoutStore,
  useAuthStore,
  useUserStore,
  useCustomerStore,
  useProductCategoryStore,
  useProductStore,
  useSaleStore,
  useReportStore,
};

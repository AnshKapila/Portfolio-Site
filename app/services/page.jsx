export const metadata = {
  title: "Services | Intent Studio",
};
import { ServicesListPage } from "../../src/pages/ServicesListPage";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  return <ServicesListPage />;
}

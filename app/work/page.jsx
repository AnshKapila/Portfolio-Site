export const metadata = {
  title: "Work | Intent Studio",
};
import { WorkPage } from "../../src/pages/WorkPage";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  return <WorkPage />;
}

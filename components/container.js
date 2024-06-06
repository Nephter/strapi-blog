import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container px-8 mx-auto xl:px-5",
      )}>
      {props.children}
    </div>
  );
}

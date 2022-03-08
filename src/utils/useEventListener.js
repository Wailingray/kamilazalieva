import { useEffect, useRef } from "react";

export default function useEventListener(
  eventType,
  callback,
  element = window
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e) => callbackRef.current(e);
    var skin1 = document.getElementsByClassName("skin_1");
    for (var i = 0; i < skin1.length; i++) {
      skin1[i].addEventListener("click", function () {
        console.log("hi");
      });
    }
    addEventListener(eventType, handler);

    return () =>
      ReactDOM.findDOMNode(element).removeEventListener(eventType, handler);
  }, [eventType, element]);
}

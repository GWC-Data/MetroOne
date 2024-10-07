import NumberTicker from "./ui/number-ticker";

export function NumberTickerDemo() {
  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white dark:text-white">
      <NumberTicker value={5.67} decimalPlaces={2} />
    </p>
  );
}

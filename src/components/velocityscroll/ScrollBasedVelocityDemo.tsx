import { VelocityScroll } from "@/components/velocityscroll/velocityscroll";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
    text="Learn Effortlessly  Thrive Together "
    default_velocity={2}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-[#7F6EFC] drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}

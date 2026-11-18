export default function Footer() {
  return (
    <footer className="mt-10 rounded-t-[80px] bg-brand py-14 text-center text-sm text-white md:rounded-t-[150px]">
      <div className="wrap">
        Copyright © {new Date().getFullYear()} LUGX Gaming Company. All rights reserved.
        <span className="ml-4">Design: TemplateMo</span>
      </div>
    </footer>
  );
}
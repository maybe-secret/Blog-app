export default function Copyright() {
  return (
    <div className="border-t bg-light-secondary dark:bg-dark-secondary dark:border-gray-700 border-gray-300 py-1 text-center text-sm text-gray-600 transition-all duration-300">
      © {new Date().getFullYear()} Your Blog Name. All rights reserved.
    </div>
  );
}

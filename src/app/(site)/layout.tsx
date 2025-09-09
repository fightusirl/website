export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans min-h-screen bg-[radial-gradient(circle_at_top_left,_#C1D26C33,_transparent_50%),radial-gradient(circle_at_bottom_right,_#FF6FB533,_transparent_50%),linear-gradient(to_bottom_right,_#FDFBF7,_#EAEAEA)]">
      {children}
    </div>
  );
}

import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

type Props = {
  children: React.ReactNode;
};

export function ReactQueryProvider({
  children,
}: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

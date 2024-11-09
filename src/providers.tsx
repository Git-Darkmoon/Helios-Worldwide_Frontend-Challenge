import { QueryClient, QueryClientProvider } from "react-query"
import AppProvider from "./context"

function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * (60 * 1000), // 10 mins
        cacheTime: 15 * (60 * 1000), // 15 mins
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>{children}</AppProvider>
    </QueryClientProvider>
  )
}
export default Providers

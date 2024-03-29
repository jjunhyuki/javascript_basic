//useQueryClient 사용법
// invalidateQueries()는 말 그대로 캐시에 있는 모든 쿼리 혹은 특정 쿼리들을 invalidate하는 함수.
// invalidate은 '무효화하다' 라는 뜻을 가지고 있는데, 여기서는 캐시에 저장된 쿼리를 무효화한다는 의미.
//쿼리를 invalidate하면 해당 쿼리를 통해 받아 온 데이터를 stale time이 지났는지 아닌지에 상관없이 무조건 stale 상태로 만들고,
//해당 데이터를 백그라운드에서 refetch하게 된다.

// 쿼리 클라이언트는 useQueryClient() 훅을 사용해서 가져올 수 있고,
//원하는 시점에 queryClient.invalidateQueries() 함수를 실행하면 된다.
import { useQueryClient } from '@tanstack/react-query';

const queryClient = useQueryClient();

// ...

queryClient.invalidateQueries();

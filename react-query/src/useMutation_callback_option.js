// 뮤테이션 객체에는 onMutate, onSuccess, onError, onSettled와 같은 주요 옵션들이 있어서 뮤테이션 사이클에 따라 적절한 동작을 추가할 수 있다.
// onSuccess, 즉 뮤테이션이 성공한 시점에 ['post'] 쿼리를 invalidate해 주는 함수를 콜백으로 등록해 주면 된다.

const queryClient = useQueryClient();

// ...

const uploadPostMutation = useMutation({
  mutationFn: newPost => uploadPost(newPost),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});

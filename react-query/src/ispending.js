//포스트가 업로드되는 중에는 중복해서 업로드를 하면 안 되니까 버튼을 비활성화해 보도록 해보자.
// 뮤테이션에는 isPending이라는 값이 있는데,
// 다음과 같이 uploadPostMutation.isPending 값을 이용하면 간단히 구현할 수 있다.

//전체적인 흐름을 봐보자.

const uploadPostMutation = useMutation({
  mutationFn: newPost => uploadPost(newPost),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});

// ...

<button disabled={uploadPostMutation.isPending || !content} type='submit'>
  업로드
</button>;

// onSuccess, onError, onSettled와 같은 옵션은 useMutation()에서도 사용할 수 있고 mutate() 함수에서도 사용할 수 있다.
// 이때 useMutation()에 등록한 콜백 함수들이 먼저 실행되고, 그다음에 mutate()에 등록한 콜백 함수들이 실행

const uploadPostMutation = useMutation({
  mutationFn: newPost => uploadPost(newPost),
  onSuccess: () => {
    console.log('onSuccess in useMutation');
  },
  onSettled: () => {
    console.log('onSettled in useMutation');
  },
});

uploadPostMutation.mutate(newPost, {
  onSuccess: () => {
    console.log('onSuccess in mutate');
  },
  onSettled: () => {
    console.log('onSettled in mutate');
  },
});

//주의할점
// useMutation()에 등록된 콜백 함수들은 컴포넌트가 언마운트되더라도 실행이 되지만,
// mutate()의 콜백 함수들은 만약 뮤테이션이 끝나기 전에 해당 컴포넌트가 언마운트되면 실행되지 않는 특징을 가지고있다.

//  따라서 query invalidation과 같이 뮤테이션 과정에서 꼭 필요한 로직은 useMutation()을 통해 등록하고,
//  그 외에 다른 페이지로 리다이렉트한다든가, 혹은 결과를 토스트로 띄워주는 것과 같이 해당 컴포넌트에 종속적인 로직은 mutate()를 통해 등록해 주면 됩니다.

const uploadPostMutation2 = useMutation({
  mutationFn: newPost => uploadPost(newPost),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});

const handleUploadPost = newPost => {
  uploadPostMutation.mutate(newPost, {
    onSuccess: () => {
      toast('포스트가 성공적으로 업로드 되었습니다!');
    },
  });
};

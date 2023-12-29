// Model은 데이터를 유지하고 데이터가 변경될 때 옵저버들에게 알립니다.
// ViewModel은 Model과 뷰 간의 중개자 역할을 합니다.
// View는 ViewModel과 바인딩된 요소를 렌더링하고, 사용자 입력(버튼 클릭 등)에 반응하여 ViewModel의 메서드를 호출합니다.

//  MVVM 패턴은 데이터 바인딩을 통해 Model과 View를 느슨하게 결합시키고,
//  ViewModel을 통해 중개함으로써 각 구성 요소를 분리하여 코드를 더 쉽게 유지보수할 수 있게 합니다. 
 
 // Model
 class Model {
    constructor() {
      this.data = 0;
      this.observers = [];
    }

    addObserver(observer) {
      this.observers.push(observer);
    }

    setData(data) {
      this.data = data;
      this.notifyObservers();
    }

    getData() {
      return this.data;
    }

    notifyObservers() {
      this.observers.forEach(observer => observer.update());
    }
  }

  // ViewModel
  class ViewModel {
    constructor(model) {
      this.model = model;
    }

    getModelData() {
      return this.model.getData();
    }

    increment() {
      const newData = this.model.getData() + 1;
      this.model.setData(newData);
    }
  }

  // View
  class View {
    constructor(viewModel) {
      this.viewModel = viewModel;
      this.rootElement = document.getElementById('app');
      this.bindElements();
      this.render();
    }

    bindElements() {
      const elements = this.rootElement.querySelectorAll('[data-bind]');
      elements.forEach(element => {
        const binding = element.getAttribute('data-bind');
        const [event, handler] = binding.split(':');
        element.addEventListener(event, this.viewModel[handler].bind(this.viewModel));
      });
    }

    render() {
      const textElement = this.rootElement.querySelector('[data-bind="text: modelData"]');
      textElement.textContent = this.viewModel.getModelData();
    }

    update() {
      this.render();
    }
  }

  const model = new Model();
  const viewModel = new ViewModel(model);
  const view = new View(viewModel);

  // Add the view as an observer to the model
  model.addObserver(view);
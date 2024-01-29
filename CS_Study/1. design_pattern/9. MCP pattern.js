// Model은 데이터를 유지합니다.
// View는 Presenter를 통해 모델의 데이터를 보여주고, Presenter로 사용자 입력(버튼 클릭 등)을 전달합니다.
// Presenter는 모델을 업데이트하고 View를 업데이트합니다.

//  MVP 패턴은 MVC 패턴과 마찬가지로 각 구성 요소를 분리하여 유지보수를 용이하게 만들어줍니다. 
//  Presenter는 View와 강하게 결합되어 있지만, Model과는 느슨하게 결합되어 있어 유연성이 높아집니다.

// Model
class Model {
    constructor() {
      this.data = 0;
    }

    setData(data) {
      this.data = data;
    }

    getData() {
      return this.data;
    }
  }

  // View
  class View {
    constructor(presenter) {
      this.presenter = presenter;
      this.rootElement = document.getElementById('app');
      this.render();
    }

    render() {
      this.rootElement.innerHTML = `
        <p>Value: ${this.presenter.getModelData()}</p>
        <button onclick="presenter.increment()">Increment</button>
      `;
    }
  }

  // Presenter
  class Presenter {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }

    getModelData() {
      return this.model.getData();
    }

    increment() {
      const newData = this.model.getData() + 1;
      this.model.setData(newData);
      this.view.render();
    }
  }

  const model = new Model();
  const presenter = new Presenter(model);
  const view = new View(presenter);
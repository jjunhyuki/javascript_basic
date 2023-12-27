// Model은 데이터를 유지하고 데이터가 변경될 때 옵저버들에게 알린다.
// View는 모델의 데이터를 보여주고, 데이터가 변경될 때 업데이트된다.
// Controller는 사용자 입력(버튼 클릭 등)을 처리하고 모델을 업데이트해야한다.

//  이것은 간단한 예제이며, 실제로는 더 복잡한 응용프로그램에 대한 구조를 만들 수 있습니다. 
//  이 패턴을 사용하면 각 구성 요소를 독립적으로 테스트하고 변경할 수 있어 유지보수가 훨씬 쉬워집니다.

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

  // View
  class View {
    constructor(model, controller) {
      this.model = model;
      this.controller = controller;
      this.rootElement = document.getElementById('app');
      this.render();
    }

    render() {
      this.rootElement.innerHTML = `
        <p>Value: ${this.model.getData()}</p>
        <button onclick="controller.increment()">Increment</button>
      `;
    }

    update() {
      this.render();
    }
  }

  // Controller
  class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.model.addObserver(this.view);
    }

    increment() {
      const newData = this.model.getData() + 1;
      this.model.setData(newData);
    }
  }

  const model = new Model();
  const view = new View(model);
  const controller = new Controller(model, view);
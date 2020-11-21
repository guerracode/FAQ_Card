document.addEventListener('DOMContentLoaded', function (event) {
  var question = document.getElementsByClassName('question');
  var answer = document.getElementsByClassName('answer');

  for (var i = 0; i < question.length; i++) {
    question[i].onclick = function () {
      var setClasses = !this.classList.contains('active');
      setClass(question, 'active', 'remove');
      setClass(answer, 'show', 'remove');

      if (setClasses) {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
      }
    };
  }

  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
});

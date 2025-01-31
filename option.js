"use strict";

// Импорт данных из модулей

import { renderComments } from './render.js';

// Отправка коммента с помощью кнопки Enter
document.addEventListener('keyup', (event) => {
  if (event.key === "Enter") {
    buttonElement.click()
  }
});

// Функция активности лайка
export const like = (commentsArr) => {
  const likeButtons = document.querySelectorAll('.like-button');
  for (const likeButton of likeButtons) {
    likeButton.addEventListener('click', (e) => {
      e.stopPropagation()

      const index = likeButton.dataset.index;
      if (commentsArr[index].isActiveLike) {
        commentsArr[index].likes--;

      } else {
        commentsArr[index].likes++;
      }
      commentsArr[index].isActiveLike = !commentsArr[index].isActiveLike;
      renderComments(commentsArr);
    })
  }
};

// Обработчик клика на комментарий (ответ на комментарий)
export const initAnswer = () => {
  const commentsElements = document.querySelectorAll(".comment");
  const elementComment = document.getElementById('commentInput')
  for (const commentElement of commentsElements) {
    commentElement.addEventListener('click', () => {
      elementComment.value = `> ${commentElement.querySelector('.comment-text').innerHTML
        .replaceAll("&amp", "&;")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("&quot;", '"')}`
        + `\n\n${commentElement.querySelector('.comment-header').children[0].innerHTML
          .replaceAll("&amp", "&;")
          .replaceAll("&lt;", "<")
          .replaceAll("&gt;", ">")
          .replaceAll("&quot;", '"')}`
    })
  }
};


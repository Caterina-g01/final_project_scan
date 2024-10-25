import React from "react";
import HTMLReactParser from "html-react-parser";
import s from "./styles.module.scss";
import Button from "../Button/Button";

const cleanContent = (markup) => {
  markup = markup.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

  // Удаление всех img тегов из статьи
  markup = markup.replace(/<img[^>]*>/g, ""); // Регулярное выражение для удаления <img> тегов

  markup = markup
    .replaceAll("<scandoc>", `<div>`)
    .replaceAll("</scandoc>", "</div>")
    .replaceAll("<p>", "<span>")
    .replaceAll("</p>", "</span>")
    .replaceAll("<sentence>", "<p>")
    .replaceAll("</sentence>", "</p>")
    .replaceAll("<entity", "<span")
    .replaceAll("</entity>", "</span>")
    .replaceAll("<speech", "<span")
    .replaceAll("</speech>", "</span>")
    .replaceAll("<vue", "<span")
    .replaceAll("</vue>", "</span>")
    .replaceAll("<br>", "");

  while (markup.includes("<figure>")) {
    let figureHTML = markup.substring(markup.indexOf("<figure>"));
    figureHTML = figureHTML.substring(
      0,
      figureHTML.indexOf("</figure>") + "</figure>".length
    );

    if (!figureHTML.includes("data-image-src")) {
      markup = markup.replace(figureHTML, "");
      continue;
    }

    let url = figureHTML.substring(
      figureHTML.indexOf("data-image-src") + 'data-image-src="'.length
    );
    url = url.substring(0, url.indexOf('"'));

    markup = markup.replace(
      figureHTML,
      `<img src="${url}" alt="Фото из публикации">`
    );
  }

  while (markup.includes("<span></span>"))
    markup = markup.replace("<span></span>", "");

  while (markup.includes("<p></p>")) markup = markup.replace("<p></p>", "");

  if (markup.length > 1800) {
    markup = markup.substring(
      0,
      markup.lastIndexOf("</p>", 1700) + "</p>".length
    );
    markup += "...";
  }

  return markup;
};

const DocumentCard = ({
  date,
  source,
  title,
  tag,
  content,
  wordCount,
  image,
  url,
}) => {
  const cleanedContent = cleanContent(content);

  return (
    <div className={s.cardNews__container}>
      <div className={s.cardNews__dateAndSource}>
        <p className={s.cardNews__date}>
          {new Date(date).toLocaleDateString("ru-RU")}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={s.cardNews__source}
        >
          {source}
        </a>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={s.cardNews__title}
      >
        {title}
      </a>
      <div className={s.cardNews__tag}>{tag}</div>
      {image && (
        <div className={s.cardNews__imgBlock}>
          <img className={s.cardNews__img} src={image} alt={title} />
        </div>
      )}
      <div className={s.cardNews__description}>
        {HTMLReactParser(cleanedContent)}{" "}
      </div>
      <div className={s.cardNews__btnAndNumWords}>
        <Button className={s.cardNews__btn}>
          <a href={url} target="_blank" rel="noreferrer">
            Читать в источнике
          </a>
        </Button>
        <div className={s.cardNews__numWords}>{wordCount} слова</div>
      </div>
    </div>
  );
};

export default DocumentCard;

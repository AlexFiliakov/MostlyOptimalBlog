import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  // Split "Ergodicity Advantage" into two parts for styling
  const titleParts = title.split(" ")

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        {titleParts.length === 2 ? (
          <>
            <span class="title-gold">{titleParts[0]}</span>
            <span class="title-forest"> {titleParts[1]}</span>
            <br />
            <span class="title-green">Applications</span>
          </>
        ) : (
          title
        )}
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.5rem;
  margin: 0;
  font-family: var(--headerFont);
  font-weight: 700;
}

.page-title a {
  text-decoration: none;
  background: none;
  padding: 0;
}

.page-title a:hover {
  opacity: 0.8;
}

.page-title .title-gold {
  color: #F7C948;
}

.page-title .title-forest {
  color: #2A4D3A;
}

.page-title .title-green {
  color: #00B4A6;
  font-size: 2rem;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor

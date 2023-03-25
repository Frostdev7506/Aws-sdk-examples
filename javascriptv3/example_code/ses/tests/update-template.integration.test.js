import { describe, beforeAll, afterAll, it, expect } from "vitest";

import {
  createTemplate,
  deleteTemplate,
  getTemplate,
} from "../src/libs/sesUtils";
import { HTML_PART, run, TEMPLATE_NAME } from "../src/ses_updatetemplate";

describe("ses_updatetemplate", () => {
  beforeAll(async () => {
    await createTemplate(TEMPLATE_NAME);
  });

  afterAll(async () => {
    await deleteTemplate(TEMPLATE_NAME);
  });

  it("should successfully update a template", async () => {
    await run();
    const result = await getTemplate(TEMPLATE_NAME);
    expect(result.Template.HtmlPart).toBe(HTML_PART);
  });
});

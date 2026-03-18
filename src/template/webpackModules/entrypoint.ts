import { greeting } from "@moonlight-mod/wp/template_someLibrary";

const logger = moonlight.getLogger("template/entrypoint");
logger.info("Hello from entrypoint!");
logger.info("someLibrary exports:", greeting);

const natives = moonlight.getNatives("template");
logger.info("node exports:", natives);

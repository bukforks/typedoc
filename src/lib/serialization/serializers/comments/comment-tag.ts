import { CommentTag } from "../../../models";

import { SerializerComponent } from "../../components";
import type { CommentTag as JSONCommentTag } from "../../schema";

export class CommentTagSerializer extends SerializerComponent<CommentTag> {
    static override PRIORITY = 1000;

    /**
     * Filter for instances of {@link CommentTag}
     */
    serializeGroup(instance: unknown): boolean {
        return instance instanceof CommentTag;
    }

    supports(_t: unknown) {
        return true;
    }

    toObject(
        tag: CommentTag,
        obj: Partial<JSONCommentTag> = {}
    ): JSONCommentTag {
        const result: JSONCommentTag = {
            tag: tag.tag,
            content: tag.content,
        };

        if (tag.paramName) {
            result.paramName = tag.paramName;
        }

        return Object.assign(obj, result);
    }
}

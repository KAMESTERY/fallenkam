function containsTag(inputTag) {
  return (media) =>
      media.Tags.some((tag) => tag === inputTag);
}

function filterMediaByTag(mediaItems, inputTag) {
  return mediaItems.filter(containsTag(inputTag)).map(media => {
    return Object.assign({}, media, {
      Tags: media.Tags.filter(tag => tag === inputTag),
    });
  });
}

export {filterMediaByTag}

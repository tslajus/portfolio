const linkConverter = function (redirects: any[]): Link[] {
  return redirects.map((redirect: any) => ({
    icon: redirect.icon as "github" | "linkedin" | "preview",
    linkUrl: redirect.linkUrl,
    linkComment: redirect.linkComment,
  }));
};

export default linkConverter;

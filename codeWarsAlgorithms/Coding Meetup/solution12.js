function findAdmin(list, lang) {
  return list.filter(
    (data) => data.githubAdmin === 'yes' && data.language === lang
  );
}

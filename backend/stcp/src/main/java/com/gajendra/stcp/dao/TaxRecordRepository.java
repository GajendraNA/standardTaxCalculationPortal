package com.gajendra.stcp.dao;

import com.gajendra.stcp.model.TaxRecord;
import org.hibernate.sql.ast.tree.expression.JdbcParameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaxRecordRepository extends JpaRepository<TaxRecord, Long> {

}
